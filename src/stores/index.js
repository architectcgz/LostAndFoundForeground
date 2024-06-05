
import { createStore } from 'vuex';

export default createStore({
    state: {
        accessToken: '',
        refreshToken: '',
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setRefreshToken(state, refreshToken) {
            state.refreshToken = refreshToken;
        },
    },
    actions: {
        saveTokens({ commit }, tokens) {
            commit('setAccessToken', tokens.accessToken);
            commit('setRefreshToken', tokens.refreshToken);
        },
    },
    getters: {
        accessToken: state => state.accessToken,
        refreshToken: state => state.refreshToken,
    },
});
