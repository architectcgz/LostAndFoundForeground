<template>
  <div class="vh-100">
    <Navbar/>
  </div>
  <div class="all">
    <span class="background image">
      <img src="../../../assets/images/flat-alzheimer-concept-illustration_23-2149042102.jpg" alt="background" />
    </span>
    <span class="container">
      <h1 >找回密码</h1>
      <form @submit.prevent="handleSubmit">
        <div class="phone-input-wrapper">
          <label for="phone" class="input-group-text bg-primary">电话号：</label>
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
        <label for="code" class="input-group-text bg-primary">验证码：</label>
        <input
            type="text"
            v-model="form.code"
            pattern="\d{6}"
            placeholder="验证码"
        />
        <br/>

        <label for="password" class="input-group-text bg-primary">输入密码：</label>
        <input
            type="password"
            v-model="form.pwd"
            placeholder="输入密码"
            @blur="validatePassword"
            :class="{'is-invalid': passwordError}"
        />
        <div v-if="passwordError" class="error-message">{{ passwordError }}</div>
        <br/>

        <label for="repeatPwd" class="input-group-text bg-primary">确认密码：</label>
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
              class="button input-group-text bg-primary text-white px-2"
              style="margin-right: 40%; color: white"
          >确认</button>
          <router-link to="/user/login" class="button">返回登陆</router-link>
        </div>
      </form>
    </span>
  </div>


</template>

<script src="./UserForgetPwd.js">

</script>


<style scoped>
  @import "./UserForgetPwd.css";
</style>
