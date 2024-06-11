import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axiosClient from "@/axios.js";
import Swal from "sweetalert2";
import router from "@/router/index.js";
import {goToDetail} from "@/views/js/goToDetail.js";

export default {
  components: { Navbar, Footer },
  data() {
    return {
      totalItems: 0,
      searchQuery: '',
      items: [],
      filteredItems: [],
      currentPage: 1,
      itemsPerPage: 10,
      showRegisterForm: false,
      newItem: {
        name: '',
        date: '',
        description: ''
      }
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    }
  },
  watch: {
    searchQuery(newQuery) {
      if (!newQuery.trim()) {
        this.fetchItems();
      }
    }
  },
  methods: {
    goToDetail,
    async fetchItems(pageNum = 1) {
      try {
        const response = await axiosClient.get(`/lost/list`, {
          params: {
            pageNum,
            pageSize: this.itemsPerPage
          }
        });
        const data = response.data;
        if (data.code === 200) {
          const newItems = data.data.map(item => ({
            id:item.id,
            name: item.name,
            createTime: item.createTime,
            lostTime: item.lostTime,
            description: item.description,
            image: item.image || 'placeholder.jpg'
          }));
          if (pageNum === 1) {
            this.items = newItems;
          } else {
            this.items = [...this.items, ...newItems];
          }
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
        const response = await axiosClient.get(`/lost/search`, {
          params: {
            title: this.searchQuery.toString()
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = response.data;
        if (data.code === 200) {
          this.filteredItems = data.data.map(item => ({
            id:item.id,
            name: item.name,
            foundTime: item.foundTime,
            description: item.description,
            image: item.image || 'placeholder.jpg'
          }));
          this.totalItems = this.filteredItems.length;
          this.currentPage = 1;
        } else {
          console.error('查询失败:', data.message);
          this.showLoginAlert();
        }
      } catch (error) {
        console.error('查询失败', error);
        this.showLoginAlert();
      }
    },
    showLoginAlert() {
      Swal.fire({
        title: '查询失败',
        text: '请先登录再进行搜索。',
        icon: 'warning',
        confirmButtonText: '确定'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/user/login');
        }
      });
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
  },
  mounted() {
    this.fetchItems();
  }
};
