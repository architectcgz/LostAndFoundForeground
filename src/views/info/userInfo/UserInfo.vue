<script src="./UserInfo.js">

</script>

<template>
  <div style="margin: 0" class="vh-100 vw-100">
    <Navbar />
    <div class="q">
      <div class="a">
        <div class="left-section">
          <div class="a1">
            <img :src="avatar" height="200px" width="200px" alt="头像"/>
          </div>
          <div class="a3">
            <b>个人信息：</b>
            <h4><b>昵称：</b></h4>
            <input v-model="nickname" :readonly="!editNickname">
            <button @click="toggleEditNickname">编辑昵称</button>
            <h4><b>手机号：</b></h4>
            <input v-model="phone" readonly>
            <h4><b>更改头像：</b></h4>
            <input type="file" @change="previewImage" accept="image/*">
            <br>
            <button type="button" @click="saveChanges">保存所有更改</button>
          </div>
        </div>
        <div class="right-section">
          <h3>曾经发布：</h3>
          <h4><b>失物:</b></h4>
          <div>
            <div id="item-list-lost" class="items-grid">
              <div>
                <h6>总数量：{{ lostItemsTotal }}</h6>
              </div>
              <div v-for="item in paginatedLostItems" :key="item.name" class="item" @click="goToDetail('lost',item.id)">
                <img :src="item.image" alt="失物图片">
                <div class="item-details">
                  <h4>{{ item.name }}</h4>
                  <p>丢失时间：{{ item.lostTime }}</p>
                  <p>创建时间:{{item.createTime}}</p>
                  <p>描述：{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页按钮 -->
          <div class="pagination">
            <button @click="changeLostItemPage('prev')" :disabled="lostItemsCurrentPage === 1" style="width: 200px;">上一页</button>
            <span id="page-info">第 {{ lostItemsCurrentPage }} 页，共 {{ lostTotalPages }} 页</span>
            <button @click="changeLostItemPage('next')" :disabled="lostItemsCurrentPage === lostTotalPages" style="width: 200px;">下一页</button>
          </div>

          <h4><b>招领:</b></h4>
          <div id="item-list-found" class="items-grid">
            <h6>总数量：{{ foundItemsTotal }}</h6>
            <div v-for="item in paginatedFoundItems" :key="item.name" class="item" @click="goToDetail('found',item.id)">
              <img :src="item.image" alt="失物图片">
              <div class="item-details">
                <h4>{{ item.name }}</h4>
                <p>创建时间:{{item.createTime}}</p>
                <p>丢失时间：{{ item.foundTime }}</p>
                <p>描述：{{ item.description }}</p>
              </div>
            </div>
          </div>
          <!-- 分页按钮 -->
          <div class="pagination">
            <button @click="changeFoundItemPage('prev')" :disabled="foundItemsCurrentPage === 1" style="width: 200px;">上一页</button>
            <span id="page-info">第 {{ foundItemsCurrentPage }} 页，共 {{ foundTotalPages }} 页</span>
            <button @click="changeFoundItemPage('next')" :disabled="foundItemsCurrentPage === foundTotalPages" style="width: 200px;">下一页</button>
          </div>
        </div>
      </div>
    </div>
    <Footer style="bottom: 0"/>
  </div>
</template>


<style scoped>
  @import "./UserInfo.css";
</style>