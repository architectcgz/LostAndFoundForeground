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
            <div v-if="errors.name" class="error-message">{{ errors.ownerName }}</div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">电话号*</span>
              </div>
              <input class="form-control" placeholder="输入手机号码" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="formData.phone">
            </div>
            <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>

            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">物品*</span>
              </div>
              <input type="text" class="form-control" placeholder="物品名称" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div v-if="errors.itemName" class="error-message">{{ errors.itemName }}</div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">地点</span>
              </div>
              <input type="text" placeholder="在哪里捡到" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div v-if="errors.location" class="error-message">{{ errors.location }}</div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">日期*</span>
              </div>
              <input type="date" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div v-if="errors.lostTime" class="error-message">{{ errors.lostTime }}</div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">物品描述*</span>
              </div>
              <textarea class="form-control" placeholder="它是黑色的..." aria-label="With textarea"></textarea>
            </div>
            <div v-if="errors.description" class="error-message">{{ errors.description }}</div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">上传图片</span>
              </div>
              <input type="file" @change="handleFileUpload" class="form-control" aria-label="Upload">
            </div>
            <div v-if="errors.image" class="error-message">{{ errors.image }}</div>

            <div class="form-check mb-5">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">同意条款和条件</label>
            </div>
            <div v-if="errors.isAgreeTerms" class="error-message">{{ errors.isAgreeTerms }}</div>
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
import { baseBackgroundUrl } from "@/constants/globalConstants.js";
import useUserStore from "@/stores/index.js";
import axiosClient from "@/axios.js";
import Swal from "sweetalert2";
import {isPhoneValid} from "@/utils/validateUtils.js";

export default {
  components: { Navbar },
  data() {
    return {
      // 初始化表单数据
      formData: {
        name:useUserStore().user.name,
        ownerName: useUserStore().user.name,
        itemName: '',
        description: '',
        image: null,
        phone: useUserStore().user.phone,
        categoryId: '',
        lostLocation: '',
        lostTime: '',
      },
      isAgreeTerms: false, // 同意条款的标记
      errors:{}
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.image = event.target.files[0];
    },
    validateName() {
      this.errors.ownerName = this.formData.name ? '' : '姓名不能为空';
    },
    validatePhone() {
      if (!this.formData.phone) {
        this.errors.phone = '手机号不能为空';
      } else if (!isPhoneValid(this.formData.phone)) {
        this.errors.phone = '请输入有效的电话号码';
      } else {
        this.errors.phone = '';
      }
    },
    validateItemName() {
      this.errors.itemName = this.formData.itemName ? '' : '丢失物品不能为空';
    },
    validateLocation() {
      this.errors.location = this.formData.location ? '' : '地点不能为空';
    },
    validateLostTime() {
      this.errors.lostTime = this.formData.lostTime ? '' : '日期不能为空';
    },
    validateDescription() {
      this.errors.description = this.formData.description ? '' : '物品描述不能为空';
    },
    async submitForm() {
      this.validateName();
      this.validatePhone();
      this.validateItemName();
      this.validateLocation();
      this.validateLostTime();
      this.validateDescription();
      this.errors.isAgreeTerms = this.isAgreeTerms ? '' : '请同意条款和条件';
      if (Object.keys(this.errors).some(key => this.errors[key])) {
        return;
      }
      const dataToSend = {
        name: this.formData.itemName,
        phone: this.formData.phone,
        categoryId: '1',
        lostLocation: this.formData.lostLocation,
        lostTime: this.formData.lostTime,
        description: this.formData.description,
        ownerName: this.formData.ownerName,
        image: this.formData.image||null,
      };

      axiosClient.post(`${baseBackgroundUrl}/found/publish`, dataToSend, {
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

