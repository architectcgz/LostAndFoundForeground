import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";

export async function getUserInfo() {
    const userInfoResponse = await axiosClient.get(`/user/info`, {
        headers: {
            'Authorization': `Bearer ${useUserStore().accessToken}`,
            'Content-Type': 'application/json'
        }
    });
    const userInfo = userInfoResponse.data;
    console.log(userInfo);
    if (userInfo.code === 200) {
        //保存到Vuex,供其他页面使用,同时保存到localStorage
        //这个函数已经有了保存到localStorage的逻辑
        useUserStore().updateUserInfo(userInfo.data);
        console.log('User Info:', userInfo);
    } else {
        this.submitMessage = userInfo.message || 'Failed to fetch user info';
        console.log(userInfo.message);
    }
}