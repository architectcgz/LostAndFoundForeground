<template>
  <div class="vh-100">
    <Navbar/>
    <main>
      <section>
        <div class="main-container">

        <span class="container p-5 mt-5" id="form-container">

          <form class="mt-4">
            <h1 class="text-center">捡到物品？</h1>
            <h3 class="text-center">登记下表来帮助失主</h3>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default" >姓名*</span>
              </div>
              <input type="text" class="form-control" placeholder="输入姓名" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="formData.name">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">电话号*</span>
              </div>
              <input class="form-control" placeholder="输入手机号码" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="formData.phone">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">物品*</span>
              </div>
              <input type="text" class="form-control" placeholder="物品名称" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>

            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">地点</span>
              </div>
              <input type="text" placeholder="在哪里捡到" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">日期*</span>
              </div>
              <input type="date" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">物品描述*</span>
              </div>
              <textarea class="form-control" placeholder="它是黑色的..." aria-label="With textarea"></textarea>
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">上传图片</span>
              </div>
              <input type="file" @change="handleFileUpload" class="form-control" aria-label="Upload">
            </div>
            <div class="form-check mb-5">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">同意条款和条件</label>
            </div>
            <div class="submit-button text-center">
              <button type="submit" class="btn btn-outline-primary" onclick="@submitForm">提交</button>
            </div>
          </form>
        </span>
          <span class="image">
          <img src="../../../assets/images/shaking_hand.png" alt="">
        </span>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { baseUrl } from "@/constants/globalConstants.js";
import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";
import Swal from "sweetalert2";

export default {
  components: { Navbar },
  data() {
    return {
      // 初始化表单数据
      formData: {
        name:useUserStore().user.name,
        ownerName: useUserStore().user.name,
        item: '',
        description: '',
        image: null,
        phone: useUserStore().user.phone,
        categoryId: '',
        lostLocation: '',
        lostTime: '',
      },
      isAgreeTerms: false, // 同意条款的标记
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.image = event.target.files[0];
    },
    async submitForm() {

      if (!this.isAgreeTerms) {
        alert('请同意条款和条件');
      }
      const dataToSend = {
        image: this.formData.image,
        categoryId: this.formData.categoryId,
        lostLocation: this.formData.lostLocation,
        lostTime: this.formData.lostTime,
        description: this.formData.description,
        ownerName: this.formData.ownerName,
        phone: this.formData.phone,
        createUser: this.formData.createUser,
      };

      axiosClient.post(`${baseUrl}/found/publish`, dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(response => {
            if(response.data.code===1){
              Swal.fire({
                title: '提交失败',
                text: `${response.data.message}`,
                icon: 'warning',
                confirmButtonText: '确定'
              });
            }else{
              console.log('提交成功:', response.data.code);
              Swal.fire({
                title: '提交成功',
                text: '招领信息提交成功！',
                icon: 'success',
                confirmButtonText: '确定'
              });
            }

          })
          .catch(error => {
            console.error('提交错误:', error);
            Swal.fire({
              title: '提交失败',
              text: '招领信息提交失败，请重试!',
              icon: 'warning',
              confirmButtonText: '确定'
            });
          });
    }
  }
};
</script>


<style scoped>

.main-container {
  display: flex; /* 使用 Flexbox */
  width: 100%; /* 确保主容器宽度为 100% */
  align-items: center;
}

.container.p-5 {
  padding: 20px; /* 保持内边距 */
  margin-left: 380px;
}

.image img {
  position: absolute;
  top: 100px;
  left: 900px;
  width: 60%; /* 图片宽度自适应其容器 */
  height: auto;
}

.input-group-text {
  background-color: #007bff; /* 更新背景颜色 */
  color: white; /* 设置文字颜色 */
}

</style>

