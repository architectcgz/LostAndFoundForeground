import { defineStore } from 'pinia';

export const useUserStore = defineStore('userInfo', {
    state: () => ({
        user:null,
        accessToken: '',
        refreshToken: '',
    }),
    persist: {
        enabled: true,
    },
    getters: {
        getAccessToken: (state) => state.accessToken,
        getRefreshToken: (state) => state.refreshToken,
        getUser: (state) => state.user,
    },
    actions: {
        setToken(accessToken, refreshToken){
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        },
        login(user, accessToken, refreshToken) {
            this.user = user;
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        },
        logout() {
            this.user = null;
            this.accessToken = '';
            this.refreshToken = '';
        },
        updateUserInfo(user){
            this.user = user;
        }
    },
});


export default useUserStore;
