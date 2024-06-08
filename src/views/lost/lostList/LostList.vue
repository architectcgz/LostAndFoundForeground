<template>
  <div style="margin: 0">
    <Navbar style="top: 0;margin-top: 0;position: fixed"/>
    <main style="margin: 0">
      <div class="button-container" style="margin-left: 30%;padding-top: 0">
        <button @click="showRegisterForm = true">
          登记失物
        </button>
      </div>
      <div class="item-container vw-100">
        <!-- 失物列表 -->
        <div id="item-list">
          <div v-for="item in paginatedItems" :key="item.title" class="item w-75">
            <img :src="item.image" alt="失物图片">
            <div class="item-details">
              <h4>{{ item.title }}</h4>
              <p>丢失时间：{{ item.date }}</p>
              <p>描述：{{ item.description }}</p>
            </div>
          </div>
          <p v-if="filteredItems.length === 0" style="text-align: center">没有找到匹配的失物。</p>
        </div>

        <!-- 分页按钮 -->
        <div class="pagination">
          <button @click="changePage('prev')" :disabled="currentPage === 1">上一页</button>
          <span id="page-info">第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
          <button @click="changePage('next')" :disabled="currentPage === totalPages">下一页</button>
        </div>
      </div>
      <div v-if="showRegisterForm" class="register-lost-item">
        <!-- 登记失物表单 -->
        <form @submit.prevent="registerLostItem">
          <label for="name">物品名称</label>
          <input type="text" id="name" v-model="newItem.name" required>
          <label for="date">拾取日期</label>
          <input type="date" id="date" v-model="newItem.date" required>
          <label for="description">描述</label>
          <textarea id="description" v-model="newItem.description" required></textarea>
          <input type="submit" value="提交">
        </form>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"
import {baseUrl} from "@/constants/globalConstants.js";

export default {
  components: {Navbar,Footer},
  data() {
    return {
      items: [],
      filteredItems: [],
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
      showRegisterForm: false,
      newItem: {
        name: '',
        date: '',
        description: '',
        foundTime:''
      }
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    }
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch(baseUrl+'/found/list?pageNum=1&pageSize=12'); // 替换为后端实际API地址
        const data = await response.json();
        if (data.code === 200) {
          this.items = data.data.map(item => ({
            title: item.name,
            date: item.foundTime,
            description: item.description,
            image: item.image || 'placeholder.jpg' // 使用默认占位符图片
          }));
          this.filteredItems = [...this.items];
        } else {
          console.error('Failed to fetch items:', data.message);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    displayItems(page) {
      this.currentPage = page;
    },
    changePage(direction) {
      if (direction === 'prev' && this.currentPage > 1) {
        this.currentPage--;
      } else if (direction === 'next' && this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    searchItems() {
      const query = this.searchQuery.toLowerCase();
      this.filteredItems = this.items.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
      this.currentPage = 1;
    },
    registerLostItem() {
      // 处理登记失物的逻辑
      this.showRegisterForm = false;
      console.log('New item registered:', this.newItem);
      // 清空表单
      this.newItem = {
        name: '',
        date: '',
        description: ''
      };
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.item-container {
  background-color: #990000; /* 统一背景色为深红色 */
  padding: 20px;
  color: #fff;
  margin: 0;
  width: 100%;
}

input[type="search"] {
  padding: 8px;
  margin-top: 8px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button-container {
  margin-top: 10px;
  text-align: center; /* Center button horizontally */
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.item {
  border: 1px solid #ddd;
  width: 80%;
  margin: 0;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: #000; /* Ensure text color is visible on light background */
}

.item img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 20px;
}

.item-details h4 {
  margin: 0;
  color: #333;
}

.item-details p {
  color: #666;
  font-size: 0.9em;
}

.register-lost-item {
  display: none; /* Default to hidden, show via button click */
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #000;
}

.register-lost-item form {
  display: flex;
  flex-direction: column;
}

.register-lost-item label {
  margin-bottom: 5px;
  font-weight: bold;
}

.register-lost-item input[type="text"],
.register-lost-item input[type="date"],
.register-lost-item textarea {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-lost-item input[type="submit"] {
  background-color: #0084ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 10px;
}

.pagination button:hover {
  background-color: #45a049;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 16px;
}
</style>
