import axios from "axios";
import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";
import {baseBackgroundUrl} from "@/constants/globalConstants.js";
import Swal from "sweetalert2";

let promise;
export async function refreshTokenFunc(url, accessToken, refreshToken) {
    if (promise) {
        //刷新token之前又有新的请求，唯一化promise，等待第一个refreshToken完成即可
        return promise;
    }
    promise = new Promise(async (resolve) => {
        try {
            console.log("Refreshing token");
            const resp = await axios.post(baseBackgroundUrl+url, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    RefreshToken: refreshToken
                },
                __isRefreshToken: true,
            });
            if(resp.data.data===null){
                Swal.fire({
                    title: '检查登陆状态',
                    text: resp.data.message,
                    icon: 'error',
                    confirmButtonText: '确定'
                });
            }
            // 从响应中提取accessToken和refreshToken
            const newAccessToken = resp.data.data.accessToken;
            const newRefreshToken = resp.data.data.refreshToken;
            // 更新 tokens
            useUserStore().accessToken = newAccessToken;
            useUserStore().refreshToken = newRefreshToken;

            axiosClient.defaults.headers.Authorization = `Bearer ${newAccessToken}`;

            resolve(resp.status === 200);
        } catch (error) {
            console.error("Failed to refresh token", error);
            resolve(false);
        } finally {
            //无论最后刷新是否成功，都要把promise设置为null
            promise = null;
        }
    });
    return promise;
}


export async function isRefreshRequest(config) {
    return !!config.__isRefreshToken;
}
