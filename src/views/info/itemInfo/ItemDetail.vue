<template>
  <div style="margin: 0" class="vh-100">
    <Navbar/>
    <span class="main-container vw-100">
      <ul>
        <li class="item-card">
          <div class="item-image">
            <img :src="this.item.image" alt="物品图片" />
          </div>
          <div class="item-info">
            <h2>{{ item.name }}</h2>
            <div class="info-group">
              <p><strong>是否认领/找到:</strong> {{ this.item.claimed }}</p>
              <p><strong>发现地点:</strong> {{ this.item.foundLocation }}</p>
              <p><strong>发现时间:</strong> {{ this.item.foundTime }}</p>
              <p><strong>描述:</strong> {{ this.item.description }}</p>
              <p><strong>联系电话:</strong> {{ this.item.phone }}</p>
            </div>
          </div>
        </li>
      </ul>
    </span>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axiosClient from "@/axios.js";
import {useRoute} from "vue-router";




export default {
  name: 'ItemDetails',
  components: { Footer, Navbar }, // 注册组件
  data() {
    return {
      dataSrc:'',
      itemId:null,
      item: null // 初始数据为空
    };
  },
  created() {
    const route = useRoute();
    this.itemId = route.params.id;
    this.dataSrc = route.params.src;
    this.fetchItems(); // 组件创建时调用fetchItems方法
  },
  methods: {
    fetchItems() {
      axiosClient.get(`/${this.dataSrc}/item-detail?id=${this.itemId}`)
          .then(response => {
            const data = response.data;
            console.log(data)
            if (data.code === 200) {
              // 检查响应码是否为200
              if(this.dataSrc==='lost'){
                this.item = {
                  id: data.data.id,
                  name: data.data.name,
                  claimed: data.data.founded===0?'已找到':'尚未找到',
                  image: data.data.image,
                  lostLocation: data.data.lostLocation,
                  foundTime: data.data.lostTime,
                  description: data.data.description,
                  phone: data.data.phone,
                  createTime: data.data.createTime,
                  updateTime: data.data.updateTime,
                };
              }else{
                this.item = {
                  name: data.data.name,
                  claimed: data.data.founded===0?'已认领':'尚未认领',
                  image: data.data.image,
                  foundLocation: data.data.foundLocation,
                  foundTime: data.data.foundTime,
                  description: data.data.description,
                  phone: data.data.phone,
                  createTime: data.data.createTime,
                  updateTime: data.data.updateTime,
                };
              }

            } else {
              alert('数据加载失败：' + response.data.message);
            }
          })
          .catch(error => {
            // 捕捉并打印任何发生的错误
            console.error('请求错误：', error);
            alert('请求数据时发生错误，请检查你的网络连接或联系管理员。');
          });
    }
  }
}
</script>

<style scoped>


.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 全屏高度 */
  padding: 20px;
  background-size: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

ul {
  list-style: none;
  padding: 0;
  width: 50%;
  max-width: 1200px; /* 控制最大宽度 */
}

.item-card {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 保证内容居中对齐 */
  margin: 20px auto; /* 自动边距实现水平居中 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}


.item-image img {
  max-width: 500px; /* 限制图片宽度 */
  height: auto;
}

.item-info {
  width:92%; /* 信息宽度全占 */
  text-align: center; /* 文字居中 */
  background-color: white; /* 文字背景色 */
}

.info-group {
  display: flex;
  flex-direction: column;
  align-items: center; /* 列项目居中 */
}

h1, h2 {
  color: #333;
  font-weight: bold;
  font-size: 1.5em;
}

p {
  color: #666;
  font-size: 1em;
  line-height: 1.5;
}

strong {
  color: #333;
  font-weight: normal;
}
</style>