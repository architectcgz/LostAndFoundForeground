import axios from 'axios';
import {baseUrl} from "@/constants/globalConstants.js";
import {jwtDecode} from "jwt-decode";
import useUserStore from "@/stores/index.js";
import router from "@/router/index.js";
import {isRefreshRequest, refreshTokenFunc} from "@/utils/refreshTokenUtil.js";


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
    async (res) => {
        if (res.headers.authorization) {
            const token = res.headers.authorization.replace("Bearer ", "");
            useUserStore().accessToken = token;
            axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
        }
        if (res.headers.refreshtoken) { // Note the lowercase 'r' to match the usual convention
            const refreshToken = res.headers.refreshtoken.replace("Bearer ", "");
            useUserStore().refreshToken = refreshToken;
        }

        return res;
    },
    async (error) => {
        const { response } = error;

        if (response.status === 401 && response.data.message === "身份验证失败,请先登录!" && !await isRefreshRequest(response.config)) {
            const refreshToken = useUserStore().getRefreshToken;
            const decodedToken = jwtDecode(refreshToken);
            const role = decodedToken.sub.split(':')[0].toLowerCase();
            const refreshUrl = role === 'admin' ? '/admin/refresh_token' : '/user/refresh_token';
            const isSuccess = await refreshTokenFunc(refreshUrl, useUserStore().getAccessToken, refreshToken);

            if (isSuccess) {
                // Retry the original request
                response.config.headers.Authorization = `Bearer ${useUserStore().getAccessToken}`;
                return await axiosClient.request(response.config);
            } else {
                const loginUrl = role === 'admin' ? '/admin/login' : '/user/login';
                await router.push(loginUrl);
            }
        }

        return Promise.reject(error);
    }
);



export default axiosClient;