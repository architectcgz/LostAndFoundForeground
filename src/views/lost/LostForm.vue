<template>
  <div>
    <Navbar/>
    <main>
      <section>
        <div class="main-container">

        <span class="container p-5 mt-5" id="form-container">

          <form class="mt-4">
            <h1 class="text-center">丢失物品？</h1>
            <h3 class="text-center">让我们帮助您！</h3>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">姓名*</span>
              </div>
              <input type="text" class="form-control" placeholder="陈小智" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="formData.name">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">电话号*</span>
              </div>
              <input type="email" class="form-control" placeholder="123886" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="formData.email">
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
              <input type="text" placeholder="如果记得的话" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
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
              <button type="submit" class="btn btn-outline-primary">提交</button>
            </div>
          </form>
        </span>
          <span class="image">
          <img src="@/assets/images/lost-2.jpg" alt="">
        </span>
        </div>
      </section>
    </main>
  </div>

</template>

<script>
import axios from 'axios';
import Navbar from "@/components/Navbar.vue"; // 确保已经安装并导入axios

export default {
  components: {Navbar},
  data() {
    return {
      // 初始化表单数据
      formData: {
        name: '',
        email: '',
        item: '',
        location: '',
        date: '',
        description: '',
        image: null,
      },
      isAgreeTerms: false, // 同意条款的标记
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.image = event.target.files[0];
    },
    submitForm() {
      if (!this.isAgreeTerms) {
        alert('请同意条款和条件');
        return;
      }

      const dataToSend = new FormData();
      dataToSend.append('name', this.formData.name);
      dataToSend.append('email', this.formData.email);
      dataToSend.append('item', this.formData.item);
      dataToSend.append('location', this.formData.location);
      dataToSend.append('date', this.formData.date);
      dataToSend.append('description', this.formData.description);
      if (this.formData.image) {
        dataToSend.append('image', this.formData.image);
      }

      // 假设 'your-backend-url' 是后端的 URL
      axios.post('your-backend-url', dataToSend, {
        headers: {
          'Content-Type': 'multipart/formdata'
        }
      })
          .then(response => {
            console.log('提交成功:', response.data);
            alert('表单提交成功！');
          })
          .catch(error => {
            console.error('提交错误:', error);
            alert('提交失败，请重试！');
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

