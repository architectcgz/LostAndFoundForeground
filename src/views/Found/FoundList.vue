<template>
  <div style="margin: 0" class="vh-100">
    <Navbar/>
    <main style="margin: 0" class="main-content">
      <div class="item-container vw-100">
        <!-- 总数量显示 -->
        <div class="total-items" style="text-align: center; margin-bottom: 10px;">
          总数量：{{ totalItems }} <router-link class="add-button" to="/lost/form">登记失物</router-link>
          <form class="form-inline my-2 my-lg-0" @submit.prevent="searchItems" style="padding-left: 200px">
            <input class="form-control mr-sm-2" type="search" placeholder="搜索失物" aria-label="Search" v-model="searchQuery">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
          </form>
        </div>

        <!-- 失物列表 -->
        <div id="item-list" class="items-grid">
          <div v-for="item in paginatedItems" :key="item.name" class="item">
            <img :src="item.image" alt="失物图片">
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>丢失时间：{{ item.foundTime }}</p>
              <p>描述：{{ item.description }}</p>
            </div>
          </div>
          <p v-if="filteredItems.length === 0" style="text-align: center">没有找到匹配的物品。</p>
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
    <Footer style="bottom: 0"/>
  </div>
</template>


<script type="module" src="./FoundList.js">

</script>

<style scoped>
@import "FoundList.css";
</style>
