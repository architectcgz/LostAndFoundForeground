import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { baseUrl } from "@/constants/globalConstants.js";
import axios from "axios";
import apiClient from "@/axios.js";

export default {
  components: { Navbar, Footer },
  data() {
    return {
      items: [],
      filteredItems: [],
      currentPage: 1,
      itemsPerPage: 12,
      searchQuery: '',
      showRegisterForm: false,
      newItem: {
        name: '',
        date: '',
        description: ''
      },
      totalItems: 0
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    paginatedItems() {
      return this.filteredItems;
    }
  },
  methods: {
    async fetchItems(pageNum = 1) {
      try {
        const response = await fetch(`${baseUrl}/found/list?pageNum=${pageNum}&pageSize=${this.itemsPerPage}`);
        const data = await response.json();
        if (data.code === 200) {
          this.items = data.data.map(item => ({
            name: item.name,
            foundTime: item.foundTime,
            description: item.description,
            image: item.image || 'placeholder.jpg' // 使用默认占位符图片
          }));
          this.filteredItems = [...this.items];
          this.totalItems = data.total;
          this.currentPage = pageNum;
        } else {
          console.error('Failed to fetch items:', data.message);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async searchItems() {
      try {
        const response = await apiClient.get(`/found/search`, {
          params: {
            title: this.searchQuery.toString()
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = response.data;
        if (data.code === 200) {
          this.items = data.data.map(item => ({
            name: item.name,
            foundTime: item.foundTime,
            description: item.description,
            image: item.image || 'placeholder.jpg' // 使用默认占位符图片
          }));
          this.filteredItems = [...this.items];
          this.totalItems = data.total;
          this.currentPage = 1; // Reset to the first page
        } else {
          console.error('查询失败:', data.message);
        }
      } catch (error) {
        console.error('查询失败', error);
      }
    },

    changePage(direction) {
      let newPage = this.currentPage;
      if (direction === 'prev' && this.currentPage > 1) {
        newPage--;
      } else if (direction === 'next' && this.currentPage < this.totalPages) {
        newPage++;
      }
      this.fetchItems(newPage);
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