<template>
  <div class="vh-100">
    <Navbar/>
  </div>
  <div>
    <div class="background">
      <img src="../../../assets/photos/schoolback2.jpg" width="100%" height="100%" alt="background" />
    </div>
    <div class="login-container">
      <h2>用户登录</h2>
      <form @submit.prevent="onLogin">
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

<script src="./UserLogin.js">

</script>

<style scoped>
  @import "UserLogin.css";
</style>
