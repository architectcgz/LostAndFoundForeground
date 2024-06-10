<template>
  <div style="margin: 0" class="vh-100">
    <Navbar />
    <div class="q">
      <div class="a">
        <div class="a1">
          <img src="@/assets/images/airpods.jpg" height="200px" width="200px" />
        </div>
        <br><br><br>
        <b><font color="dodgerblue" size="4">&nbsp;&nbsp;&nbsp;&nbsp;个人信息：</font></b>
        <div class="a2"></div>
        <br>
        <div class="a3">
          <h4><b>昵称：</b></h4>
          <input v-model="nickname" :readonly="!editNickname" @mouseenter="editNickname = true" @mouseleave="saveAndExit" @blur="saveAndExit">

          <h4><b>电话：</b></h4>
          <input v-model="phone" :readonly="!editPhone" @mouseenter="editPhone = true" @mouseleave="saveAndExit" @blur="saveAndExit">

          <button type="button" @click="changePassword">保存</button>
        </div>
        <br><br>
      </div>
    </div>
    <Footer style="bottom: 0"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'UserInfo',
  components: {Footer, Navbar},
  data() {
    return {
      nickname: 'subalaqi',
      phone: '18034609730',
      editNickname: false,
      editPhone: false
    };
  },
  methods: {
    changePassword() {
      alert('修改密码功能尚未实现！');
    },
    saveAndExit() {
      // 这里可以添加保存逻辑，目前只是退出编辑模式
      this.editNickname = false;
      this.editPhone = false;
    }
  }
}
</script>

<style scoped>
.q {
  height: 800px;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vh-100{
  background-image: url("@/assets/photos/schoolback.jpg");
}
.a {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
}
.a:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.a1 {
  margin: 0 auto;
  padding-top: 20px;
}
.a2 {
  height: 2px;
  width: 90%;
  background-color: deepskyblue;
  margin-left: 25px;
  margin-top: 5px;
}
.a3 {
  padding: 20px;
}
h4, h5 {
  cursor: pointer;
  transition: color 0.3s ease-in;
}
h5:hover {
  color: dodgerblue;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top:20px;
  padding: 10px;
  width: 100%;
}
button:hover {
  background-color: deepskyblue;
}
input[readonly] {
  background-color: #f3f3f3;
  color: #888;
  cursor: not-allowed;
}

input:not([readonly]) {
  background-color: white;
  color: black;
  cursor: text;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
