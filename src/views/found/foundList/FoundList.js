import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { baseBackgroundUrl } from "@/constants/globalConstants.js";
import axiosClient from "@/axios.js";
import {showLoginAlert} from "@/utils/showAlertUtil.js";


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
        async fetchItems(pageNum = 1) {
            try {
                const response = await axiosClient.get(`${baseBackgroundUrl}/found/list`, {
                    params: {
                        pageNum,
                        pageSize: this.itemsPerPage
                    }
                });
                const data = response.data;
                if (data.code === 200) {
                    this.items = data.data.map(item => ({
                        name: item.name,
                        foundTime: item.foundTime,
                        description: item.description,
                        image: item.image || 'placeholder.jpg'
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
                const response = await axiosClient.get(`/found/search`, {
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
                        name: item.name,
                        foundTime: item.foundTime,
                        description: item.description,
                        image: item.image || 'placeholder.jpg'
                    }));
                    this.totalItems = this.filteredItems.length;
                    this.currentPage = 1;
                } else {
                    console.error('查询失败:', data.message);
                    showLoginAlert();
                }
            } catch (error) {
                console.error('查询失败', error);
                showLoginAlert();
            }
        },
        resetItems() {
            this.filteredItems = [...this.items];
            this.totalItems = this.items.length;
            this.currentPage = 1;
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
                lostTime: '',
                description: ''
            };
        }
    },
    mounted() {
        this.fetchItems();
    }
};