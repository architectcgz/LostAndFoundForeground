<script setup>

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

      <router-link to="/user/login"><i class="fas fa-user signin grow"></i>登录</router-link>
    </div>
  </nav>
</template>

<style scoped>
  @import "/src/assets/css/homeStyle.css";
  @import "/src/assets/fontawesome-free-6.5.2-web/css/fontawesome.min.css";

</style>