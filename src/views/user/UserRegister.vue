<template>
  <div class="background">
    <img src="@/assets/photos/R2.jpg" width="100%" height="100%" alt="background" />
  </div>
  <div class="container">
    <h2>注册</h2>
    <form @submit.prevent="handleSubmit">
      <div class="phone-input-wrapper">
        <label for="phone">电话号：</label>
        <input
            type="tel"
            v-model="form.phone"
            placeholder="输入手机号"
            @blur="validatePhone"
            :class="{'is-invalid': phoneError}"
        />
        <input
            type="button"
            name="code"
            id="codeBtn"
            value="发送验证码"
            @click="sendCode"
            :disabled="isSendingCode"
        />
        <span class="countdown-span" v-if="isSendingCode">{{ codeButtonText }}</span>
      </div>
      <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
      <label for="code">验证码：</label>
      <input
          type="text"
          v-model="form.code"
          pattern="\d{6}"
          placeholder="验证码"
      />
      <br/>

      <label for="password">输入密码：</label>
      <input
          type="password"
          v-model="form.pwd"
          placeholder="输入密码"
          @blur="validatePassword"
          :class="{'is-invalid': passwordError}"
      />
      <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
      <br/>

      <label for="repeatPwd">确认密码：</label>
      <input
          type="password"
          v-model="form.repeatPwd"
          placeholder="确认密码"
          @blur="validateRepeatPassword"
          :class="{'is-invalid': repeatPasswordError}"
      />
      <div v-if="repeatPasswordError" class="error-message">{{ repeatPasswordError }}</div>
      <br/>
      <div v-if="submitMessage" class="submit-message">{{ submitMessage }}</div>

      <div class="actions">
        <button
            type="submit"
            class="button"
            style="margin-right: 40%; color: white"
        >注册</button>
        <router-link to="/user/login" class="button">返回登陆</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { isPasswordValid, isPhoneValid } from '@/utils/validateUtils.js';
import { baseUrl } from "@/constants/globalConstants.js";
import router from "@/router/index.js";
import {isStringNotEmpty} from "@/utils/stringUtils.js";

export default {
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
        const response = await axios.post(baseUrl + '/user/register', this.form);
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
          await router.push("/user/login");
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
        const response = await axios.get(baseUrl + '/user/register/code', { params: { phone: this.form.phone } });
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
</script>


<style scoped>
.background {
  left: 0;
  top: 0;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
}

.container {
  position: absolute;
  margin-right: 50%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.container label {
  display: inline-block;
  width: 20%;
  text-align: left;
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
}

.phone-input-wrapper input[type="button"] {
  margin-left: 10px;
}

input[type="text"], input[type="tel"], input[type="password"] {
  width: 40%;
  padding: 10px 0 10px 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"], input[type="button"] {
  width: 80px;
  height: 44px;
  margin-bottom: 10px;
  padding: 10px 0 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

input[name="info"] {
  width: 80px;
  height: 40px;
}

input[type="submit"]:hover, input[type="button"]:hover {
  background-color: #0056b3;
}

input[type="submit"][disabled], input[type="button"][disabled] {
  background-color: gray;
}

.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
}

.submit-message {
  font-size: 14px;
  color: green;
}

.countdown-span {
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
  line-height: 30px;
  vertical-align: middle;
}

.actions {
  display: flex;
  justify-content : left;
  align-items: center;
  margin-top: 10px;
}

.button {
  display: inline-block;
  width: 80px;
  height: 40px;
  background-color: #007bff;
  color: white;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}
.button:last-child {
  margin-right: 0;
}
.button:hover {
  background-color: #0056b3;
}

.is-invalid {
  border-color: red;
}
</style>
