import {isPasswordValid, isPhoneValid} from "@/utils/validateUtils.js";
import {baseBackgroundUrl} from "@/constants/globalConstants.js";
import axios from "axios";
import {useUserStore} from "@/stores/index.js";
import Navbar from "@/components/Navbar.vue";
import {getUserInfo} from "@/views/js/GetUserInfo.js";
import router from "@/router/index.js";


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
                    const response = await axios.post(`${baseBackgroundUrl}/user/login`, requestData, {
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
                            useUserStore().setToken(data.data.accessToken,data.data.refreshToken);
                            await getUserInfo();
                            await router.push("/");
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