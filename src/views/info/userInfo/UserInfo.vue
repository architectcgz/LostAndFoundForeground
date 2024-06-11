<script src="./UserInfo.js">

</script>

<template>
  <div style="margin: 0" class="vh-100 vw-100">
    <Navbar />
    <div class="q">
      <div class="a">
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
        <div class="a4">
          <b>曾经发布：</b>
          <h4><b>招领：</b></h4>
          <ul>
            <li v-for="item in foundItems" :key="item.id">
              <img :src="item.image" alt="招领物品图片" style="width: 100px; height: 100px;">
              <p>{{ item.description }}</p>
            </li>
          </ul>
          <h4><b>失物：</b></h4>
          <ul>
            <li v-for="item in lostItems" :key="item.id">
              <img :src="item.image" alt="失物图片" style="width: 100px; height: 100px;">
              <p>{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer style="bottom: 0"/>
  </div>
</template>

<style scoped>
  @import "./UserInfo.css";
</style>