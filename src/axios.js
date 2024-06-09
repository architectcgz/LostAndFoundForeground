import axios from 'axios';
import {baseUrl} from "@/constants/globalConstants.js";
import {jwtDecode} from "jwt-decode";
import useUserStore from "@/stores/index.js";



const axiosClient = axios.create({
    baseURL: baseUrl,
    headers:{
        'Content-Type': 'application/json',
    }
});

// 请求拦截器，附加 accessToken
axiosClient.interceptors.request.use(
    config => {
        const accessToken = useUserStore().getAccessToken;
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器，处理 401 错误并尝试刷新 token
axiosClient.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = useUserStore().getRefreshToken;
            if (refreshToken) {
                const decodedToken = jwtDecode(refreshToken);
                const role = decodedToken.sub.split(':')[0].toLowerCase();
                const refreshUrl = role === 'admin' ? '/admin/refresh_token' : '/user/refresh_token';

                try {
                    const response = await axios.post(`${refreshUrl}`, {}, {
                        headers: {
                            'Authorization': `Bearer ${useUserStore().getAccessToken}`,
                            'RefreshToken': useUserStore().getRefreshToken,
                            'Content-Type': 'application/json'
                        }
                    });

                    const { accessToken, refreshToken: newRefreshToken } = response.data;

                    // 更新 tokens
                    useUserStore().accessToken = accessToken;
                    useUserStore().refreshToken = newRefreshToken;

                    // 重新设置 Authorization 头并重试原始请求
                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                    return axiosClient(originalRequest);
                } catch (err) {
                    console.error('Token refresh failed:', err);
                    // 处理刷新 token 失败，例如重新登录
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosClient;