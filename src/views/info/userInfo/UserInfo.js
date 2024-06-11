
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";
import Swal from "sweetalert2";
import {goToDetail} from "@/views/js/goToDetail.js";

export default {
    name: 'UserInfo',
    components: { Navbar, Footer },
    data() {
        const userStore = useUserStore();
        return {
            nickname: userStore.user.name,
            originalNickname: userStore.user.name,
            phone: userStore.user.phone,
            editNickname: false,
            avatar: userStore.user.avatar,
            avatarFile: null,
            lostItemsCurrentPage: 1,
            foundItemsCurrentPage: 1,
            itemsPerPage: 3,
            lostItems: [],
            filteredLostItems:[],
            foundItems: [],
            filteredFoundItems:[],
            lostItemsTotal:0,
            foundItemsTotal:0,
        };
    },
    computed: {
        lostTotalPages() {
            return Math.ceil(this.lostItemsTotal / this.itemsPerPage);
        },
        paginatedLostItems() {
            const start = (this.lostItemsCurrentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredLostItems.slice(start, end);
        },
        foundTotalPages() {
            return Math.ceil(this.foundItemsTotal / this.itemsPerPage);
        },
        paginatedFoundItems() {
            const start = (this.foundItemsCurrentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredFoundItems.slice(start, end);
        }
    },
    methods: {
        goToDetail,
        toggleEditNickname() {
            this.editNickname = !this.editNickname;
        },
        previewImage(event) {
            const file = event.target.files[0];
            const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

            if (file.size > MAX_FILE_SIZE) {
                Swal.fire({
                    title: '文件过大',
                    text: '上传的文件大小不能超过2MB',
                    icon: 'error',
                    confirmButtonText: '确定'
                });
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.avatar = e.target.result;
                this.avatarFile = file;
            };
            reader.readAsDataURL(file);
        },
        changeLostItemPage(direction) {
            let newPageNum = this.lostItemsCurrentPage;
            if (direction === 'prev' && this.lostItemsCurrentPage > 1) {
                newPageNum--;
            } else if (direction === 'next' && this.lostItemsCurrentPage < this.lostTotalPages) {
                newPageNum++;
            }
            this.fetchLostItems(newPageNum);
        },
        changeFoundItemPage(direction) {
            let newPageNum = this.foundItemsCurrentPage;
            if (direction === 'prev' && this.foundItemsCurrentPage > 1) {
                newPageNum--;
            } else if (direction === 'next' && this.foundItemsCurrentPage < this.foundTotalPages) {
                newPageNum++;
            }
            this.fetchFoundItems(newPageNum);
        },
        async fetchLostItems(pageNum= 1) {
            axiosClient.get('/user/my-lost', {
                params: {
                    pageNum: pageNum,
                    pageSize: this.itemsPerPage
                }
            }).then(response => {
                const data = response.data;
                if (data.code === 200 && data.data.length > 0) {
                    const newItems = data.data.map(item => ({
                        id:item.id,
                        name: item.name,
                        createTime: item.createTime,
                        lostTime: item.lostTime,
                        description: item.description,
                        image: item.image || 'placeholder.jpg'
                    }));


                    if(this.lostItemsCurrentPage===1){
                        this.lostItems = newItems;
                    }else{
                        this.lostItems = [...this.lostItems, ...newItems];
                    }
                    this.filteredLostItems = [...this.lostItems];
                    this.lostItemsTotal = data.total;
                    this.lostItemsCurrentPage = pageNum;
                } else {
                    console.error('未找到失物信息:', response.data.message);
                }
            }).catch(error => {
                console.error('加载失物信息失败', error);
            });
        },
        async fetchFoundItems(pageNum= 1) {
            axiosClient.get('/user/my-found', {
                params: {
                    pageNum: pageNum,
                    pageSize: this.itemsPerPage
                }
            }).then(response => {
                const data = response.data;
                if (data.code === 200 && data.data.length > 0) {
                    const newItems = data.data.map(item => ({
                        id:item.id,
                        name: item.name,
                        createTime: item.createTime,
                        foundTime: item.foundTime,
                        description: item.description,
                        image: item.image || 'placeholder.jpg'
                    }));
                    if(this.foundItemsCurrentPage===1){
                        this.foundItems = newItems;
                    }else{
                        this.foundItems = [...this.foundItems, newItems];
                    }
                    this.filteredFoundItems = [...this.foundItems];
                    this.foundItemsTotal = data.total;
                } else {
                    console.error('未找到招领信息:', data.message);
                }
            }).catch(error => {
                console.error('加载招领信息失败', error);
            });
        },
        async modifyNickName() {
            try {
                const response = await axiosClient.post(`/user/name/update?newName=${this.nickname}`);
                if (response.data.code === 1) {
                    throw new Error(`用户名更新失败: ${response.data.message}`);
                }
                this.originalNickname = this.nickname;
                useUserStore().user.name = this.nickname;
                return '昵称已成功更新';
            } catch (error) {
                throw new Error(`昵称更新失败: ${error.message}`);
            }
        },
        async updateAvatar() {
            if (!this.avatarFile) return;

            try {
                const formData = new FormData();
                formData.append('file', this.avatarFile);
                const response = await axiosClient.post('/file/upload/avatar', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.data.code !== 200) {
                    throw new Error(response.data.message || '文件上传失败');
                }

                const url = response.data.data;
                await axiosClient.post(`/user/avatar/update?avatarUrl=${url}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response=>{
                    useUserStore().user.avatar = url;
                });

                this.avatarFile = null;
                return '头像已成功更新';
            } catch (error) {
                throw new Error(`头像更新失败: ${error.message}`);
            }
        },
        async saveChanges() {
            try {
                const messages = [];

                if (this.nickname !== this.originalNickname) {
                    messages.push(await this.modifyNickName());
                }

                if (this.avatarFile) {
                    messages.push(await this.updateAvatar());
                }

                Swal.fire({
                    title: '更新成功',
                    text: messages.join('\n'),
                    icon: 'success',
                    confirmButtonText: '确定'
                });

            } catch (error) {
                Swal.fire({
                    title: '更新失败',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: '确定'
                });
            } finally {
                this.editNickname = false;
            }
        }
    },
    mounted() {
        this.fetchLostItems();
        this.fetchFoundItems();
    }
}

