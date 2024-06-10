<template>
  <div style="margin: 0" class="vh-100">
    <Navbar />
    <div class="q">
      <div class="a">
        <div class="a1">
          <img :src="avatar" height="200px" width="200px" alt="头像"/>
        </div>
        <div class="a3">
          <b>个人信息：</b>
          <h4><b>昵称：</b></h4>
          <input v-model="nickname" :readonly="!editNickname" @mouseenter="editNickname = true" @mouseleave="saveAndExit" @blur="saveAndExit">
          <h4><b>更改头像：</b></h4>
          <input type="file" @change="previewImage" accept="image/*">
          <br>
          <button type="button" @click="saveChanges">保存所有更改</button>
        </div>
        <div class="a4">
          <b>曾经发布：</b>
          <h4><b>招领：</b></h4> <!-- 示例未具体展开招领内容，留空或根据需要添加 -->
          <ul>
            <li v-for="item in foundItems" :key="item.id">
              <img :src="item.image" alt="招领物品图片" style="width: 100px; height: 100px;">
              <p>{{ item.description }}</p>
            </li>
          </ul>
          <h4><b>失物：</b></h4>
          <ul>
            <li v-for="item in lostItems" :key="item.id">
              <img :src="item.image" alt="失物图片" style="width: 100px; height: 100px;">
              <p>{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer style="bottom: 0"/>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";

export default {
  name: 'UserInfo',
  components: { Navbar, Footer },
  data() {
    return {
      nickname: useUserStore().user.name,
      editNickname: false,
      avatar: useUserStore().user.avatar,
      avatarFile: null,
      lostItems: [], // 存储后端获取的失物信息
      foundItems: [] // 同样，这里可以存储招领信息
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    fetchLostItems() {
      axios.get('http://localhost:8080/user/my-lost', {
        params: {
          pageNum: 1,
          pageSize: 12
        }
      }).then(response => {
        if (response.data.code === 200 && response.data.data.length > 0) {
          this.lostItems = response.data.data;
        } else {
          console.error('未找到失物信息:', response.data.message);
        }
      }).catch(error => {
        console.error('加载失物信息失败', error);
      });
    },
    saveChanges() {
      if (this.avatarFile) {
        const formData = new FormData();
        formData.append('avatar', this.avatarFile);
        axiosClient().post('${baseBackgroundUrl}/user/avatar/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          if (response.data.code === 200) {
            alert('头像已成功更新');
            this.avatarFile = null;
          } else {
            alert('更新头像失败：' + response.data.message);
          }
        }).catch(error => {
          console.error('更新头像失败', error);
          alert('更新头像失败');
        });
      }

      this.editNickname = false; // 重置昵称编辑标志
    }
  },
  mounted() {
    this.fetchLostItems(); // 组件挂载时获取失物信息
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
  display: flex;        /* 启用Flexbox布局 */
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
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
.a4{
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
