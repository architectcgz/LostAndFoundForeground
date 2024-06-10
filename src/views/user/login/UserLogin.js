import {isPasswordValid, isPhoneValid} from "@/utils/validateUtils.js";
import {baseUrl} from "@/constants/globalConstants.js";
import axios from "axios";
import {useUserStore} from "@/stores/index.js";
import Navbar from "@/components/Navbar.vue";


export default {
    components: {Navbar},
    data() {
        return {
            submitMessage:'',
            phoneNum: '13949569329',
            password: 'Xhj123Xhj!',
            phoneError: '',
            passwordError: ''
        };
    },

    methods: {
        validatePhone() {
            if (!this.phoneNum) {
                this.phoneError = '请输入手机号码!';
            } else if (!isPhoneValid(this.phoneNum)) {
                this.phoneError = '手机号码格式错误!';
            } else {
                this.phoneError = '';
            }
        },
        validatePassword() {
            if (!this.password) {
                this.passwordError = '请输入密码!';
            } else if (!isPasswordValid(this.password)) {
                this.passwordError = '密码格式错误!';
            } else {
                this.passwordError = '';
            }
        },
        async onLogin() {
            this.validatePhone();
            this.validatePassword();
            if (!this.phoneError && !this.passwordError) {
                const requestData = {
                    phone: this.phoneNum,
                    password: this.password
                };
                try {
                    const response = await axios.post(`${baseUrl}/user/login`, requestData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const data = response.data;
                    if (data.code === 401) {
                        this.submitMessage = data.message !== '' ? data.message : '登录失败';
                        console.log(data.message);
                    } else {
                        if (data.data.accessToken && data.data.refreshToken) {
                            console.log(data.data.refreshToken);
                            const userInfoResponse = await axios.get(`${baseUrl}/user/info`, {
                                headers: {
                                    'Authorization': `Bearer ${data.data.accessToken}`,
                                    'Content-Type': 'application/json'
                                }
                            });

                            const userInfo = userInfoResponse.data;
                            console.log(userInfo);
                            if (userInfo.code === 200) {
                                //保存到Vuex,供其他页面使用,同时保存到localStorage
                                //这个函数已经有了保存到localStorage的逻辑
                                const userStore = useUserStore()
                                userStore.login(userInfo.data, data.data.accessToken, data.data.refreshToken);
                                window.location.href = '/';
                                console.log('Success:', data);
                                console.log('User Info:', userInfo);
                            } else {
                                this.submitMessage = userInfo.message || 'Failed to fetch user info';
                                console.log(userInfo.message);
                            }
                        }
                    }
                } catch (error) {
                    this.submitMessage = error.message;
                    console.error('Error:', error);
                }
            }
        },
    }
};