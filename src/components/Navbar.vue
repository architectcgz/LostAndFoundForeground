<script>
import {useUserStore} from "@/stores/index.js";
import {mapState} from "pinia";
import apiClient from "@/axios.js";
import {baseUrl} from "@/constants/globalConstants.js";


export default {
  computed: {
    ...mapState(useUserStore,{
      user:'user'
    }),
  },
  methods:{
    navigateToInfo(){
      window.location.href = '/user/info';
    },
    async logout(){
      await apiClient().post(baseUrl+"/user/logout",{})
          .then(response=>{
            console.log("成功登出",response.data);
            const userStore = useUserStore();
            userStore.logout();
            window.location.href="/";
          })
          .catch(error=>{
            console.log('Error logging out:', error);
          })
    }
  }
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark vw-100">
    <router-link to="/" class="navbar-brand grow">失物招领</router-link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item grow">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item grow">
          <router-link to="/lost" class="nav-link">失物处</router-link>
        </li>
        <li class="nav-item grow">
          <router-link to="/found" class="nav-link">招领处</router-link>
        </li>
        <li class="nav-item grow">
          <router-link to="/about" class="nav-link">关于</router-link>
        </li>
      </ul>

      <div v-if="user" class="user-info user-info-container">
        <img :src="user.avatar" alt="User Avatar" class="user-avatar grow" @click="navigateToInfo">
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
          <span class="username dropdown-item-text"
                style="color: black;font-size: 24px;text-align: center"
                @click="navigateToInfo">
            {{ user.name }}
          </span>
          <button
              class="dropdown-item"
              type="button"
              @click="navigateToInfo"
              style="text-align: center">
            <i class="fa-solid fa-user"></i>
            个人信息
          </button>
          <button
              class="dropdown-item"
              type="button"
              @click="logout"
              style="text-align: center">
            <i class="fa-solid fa-right-from-bracket"></i>
            退出登录
          </button>
        </div>
      </div>
      <router-link v-else to="/user/login">
        <i class="fas fa-user signin grow"></i>登录
      </router-link>
    </div>
  </nav>
</template>
<style scoped>
  @import "/src/assets/css/homeStyle.css";
  @import "/src/assets/fontawesome-free-6.5.2-web/css/fontawesome.min.css";
  body {
    font-family: Arial, sans-serif;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-info-container {
    position: relative;
    display: inline-block;
    width: 100px;
    align-content: center;
    transition: transform 0.5s;
  }
  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  .user-info-container:hover .dropdown-menu {
    display: block;
    background: white;
  }

  .dropdown-item {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: black;
    border-radius: 8px;
  }

  .dropdown-item:hover {
    background-color: #f1f1f1;
    color: #caac00;
  }

  .user-avatar.grow:hover {
    transform: scale(1.1);
  }

  .dropdown-menu a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 8px 0;
  }
  .user-info-container:hover .dropdown-menu {
    display: block;
  }
</style>