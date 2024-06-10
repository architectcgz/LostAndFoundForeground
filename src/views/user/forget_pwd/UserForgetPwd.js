import axios from 'axios';
import { isPasswordValid, isPhoneValid } from '@/utils/validateUtils.js';
import { baseBackgroundUrl } from "@/constants/globalConstants.js";
import router from "@/router/index.js";
import {isStringNotEmpty} from "@/utils/stringUtils.js";
import Navbar from "@/components/Navbar.vue";

export default {
    components: {Navbar},
    data() {
        return {
            form: {
                name: '',
                phone: '',
                pwd: '',
                repeatPwd: '',
                code: ''
            },
            phoneError: '',
            passwordError: '',
            repeatPasswordError: '',
            submitMessage: '',
            isSendingCode: false,
            codeButtonText: '发送验证码',
            timer: null,
            countdown: 60
        };
    },
    methods: {
        validatePhone() {
            this.phoneError = isPhoneValid(this.form.phone) ? '' : '手机号码格式错误';
        },
        validatePassword() {
            this.passwordError = isPasswordValid(this.form.pwd) ? '' : '密码格式错误!密码必须包含字母,数字和特殊符号中至少两种，至少8位,最多20位';
        },
        validateRepeatPassword() {
            this.repeatPasswordError = this.form.pwd === this.form.repeatPwd ? '' : '两次输入的密码不一致';
        },
        async handleSubmit() {
            this.validatePhone();
            this.validatePassword();
            this.validateRepeatPassword();
            //信息有错误
            if (this.phoneError!=='' || this.passwordError!=='' || this.repeatPasswordError!=='') {
                console.log("信息有错误!");
                return;
            }
            if(!(isStringNotEmpty(this.form.phone)&&
                isStringNotEmpty(this.form.code)&&
                isStringNotEmpty(this.form.pwd)&&
                isStringNotEmpty(this.form.repeatPwd))){
                console.log("信息不完整!");
                return;
            }

            console.log("点击了注册按钮")
            try {
                const response = await axios.post(baseBackgroundUrl + '/user/register', this.form);
                this.submitMessage = response.data.message;
                if (response.data.code === 200) {
                    // 清空表单
                    this.form = {
                        name: '',
                        phone: '',
                        pwd: '',
                        repeatPwd: '',
                        code: ''
                    };
                    //跳转到登陆页面
                    await router.push("userLogin");
                }
            } catch (error) {
                this.submitMessage = error.response?.data?.message || '注册失败';
            } finally {
            }
        },
        async sendCode() {
            if (!isPhoneValid(this.form.phone)) {
                this.phoneError = '手机号格式错误';
                return;
            }
            this.phoneError = '';
            this.isSendingCode = true;
            this.codeButtonText = `${this.countdown}s`;

            try {
                const response = await axios.get(baseBackgroundUrl + '/user/register/code', { params: { phone: this.form.phone } });
                this.submitMessage = response.data.message;
            } catch (error) {
                this.submitMessage = error.response?.data?.message || '验证码发送失败';
                this.isSendingCode = false;
                this.codeButtonText = '发送验证码';
                return;
            }

            this.timer = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown -= 1;
                    this.codeButtonText = `${this.countdown}s`;
                } else {
                    clearInterval(this.timer);
                    this.countdown = 60;
                    this.codeButtonText = '发送验证码';
                    this.isSendingCode = false;
                }
            }, 1000);
        }
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
};