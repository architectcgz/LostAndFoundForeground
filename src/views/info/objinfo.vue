<template>
  <div style="margin: 0" class="vh-100">
    <Navbar/>
    <span class="main-container vw-100">
      <ul>
        <li v-for="item in items" :key="item.id" class="item-card">
          <div class="item-image">
            <img :src="item.image" alt="物品图片" />
          </div>
          <div class="item-info">
            <h2>{{ item.name }}</h2>
            <div class="info-group">
              <p><strong>认领次数:</strong> {{ item.claimed }}</p>
              <p><strong>发现地点:</strong> {{ item.foundLocation }}</p>
              <p><strong>发现时间:</strong> {{ item.foundTime }}</p>
              <p><strong>描述:</strong> {{ item.description }}</p>
              <p><strong>联系电话:</strong> {{ item.phone }}</p>
            </div>
          </div>
        </li>
      </ul>
    </span>
    <Footer/>
  </div>
</template>

<script>
import Axios from 'axios'; // 引入Axios库
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'ItemDetails',
  components: { Footer, Navbar }, // 注册组件
  data() {
    return {
      items: [] // 初始数据为空数组
    };
  },
  created() {
    this.fetchItems(); // 组件创建时调用fetchItems方法
  },
  methods: {
    fetchItems() {
      Axios.get('') // 从你的API URL处获取数据
          .then(response => {
            if (response.data.code === 200) {
              // 检查响应码是否为200
              this.items = [response.data.data].map(item => ({
                id: item.id,
                name: item.name,
                claimed: item.founded,
                image: item.image,
                foundLocation: item.lostLocation,
                foundTime: item.lostTime,
                description: item.description,
                phone: item.phone
                // 根据你的实际API调整键名
              }));
            } else {
              // 如果不是200，弹出错误信息
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
