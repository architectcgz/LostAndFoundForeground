<template>
  <div>
    <div class="background">
      <img src="@/assets/photos/schoolback2.jpg" width="100%" height="100%" alt="background" />
    </div>
    <div class="login-container">
      <h2>用户登录</h2>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="phoneNum" placeholder="手机号" @blur="validatePhone" />
        <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
        <input type="password" v-model="password" placeholder="密码" @blur="validatePassword"/>
        <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
        <input type="submit" value="登录" />
      </form>
      <div v-if="submitMessage" class="submit-message" style="color: red">{{ submitMessage }}</div>
      <div class="container">
        <router-link to="/user/register"><div class="select">注册</div></router-link>
        <router-link to="/user/forget_pwd"><div class="setup">忘记密码</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {isPasswordValid, isPhoneValid} from "@/utils/validateUtils.js";
import {baseUrl} from "@/constants/globalConstants.js";
import router from "@/router/index.js";


export default {
  data() {
    return {
      submitMessage:'',
      phoneNum: '13949569329',
      password: 'cccasdas3242342',
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
    async onSubmit() {
      this.validatePhone();
      this.validatePassword();
      if (!this.phoneError && !this.passwordError) {
        const requestData = {
          phone: this.phoneNum,
          password: this.password
        };

        await fetch(`${baseUrl}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
              if(data.code === 401) {
                this.submitMessage = data.message!==''?data.message:'登录失败';
                console.log(data.message);
              }else{
                if (data.accessToken && data.refreshToken) {
                  localStorage.setItem('accessToken', data.accessToken);
                  localStorage.setItem('refreshToken', data.refreshToken);
                }
                router.push("/home");
                console.log('Success:', data);
              }

            })
            .catch(error => {
              this.submitMessage = error;
              console.error('Error:', error);
            });
      }
    },
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

.login-container {
  position: absolute;
  top: 45%;
  left: 75%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 30px 30px 40px 30px;
  box-shadow: 0 0 10px;
  width: 325px;
  text-align: center;
}

.login-container h2 {
  margin-bottom: 30px;
  color: #333;
}

.login-container input[type="text"],
.login-container input[type="password"] {
  width: 95%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: auto;
}

.login-container .error-message {
  color: red;
  margin-bottom: 10px;
  display: block;
}

.login-container input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.login-container input[type="submit"]:hover {
  background-color: #0056b3;
}

.container {
  display: flex;
}

.container a {
  flex: 1;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  font-size: 15px;
}

.container a:hover {
  color: rgb(134, 119, 119);
}
</style>
