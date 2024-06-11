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
          <div v-for="item in paginatedItems" :key="item.name" class="item" @click="goToDetail('lost',item.id)">
            <img :src="item.image" alt="失物图片">
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>丢失时间：{{ item.lostTime }}</p>
              <p>创建时间:{{item.createTime}}</p>
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

    </main>
    <Footer style="bottom: 0"/>
  </div>
</template>


<script type="module" src="./LostList.js">

</script>

<style scoped>
  @import "LostList.css";
</style>
