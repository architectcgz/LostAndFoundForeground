<template>
  <main>
    <section>
      <div class="background">
        <img src="@/assets/photos/LostForm.png" width="130%" height="120%" alt="background" />
      </div>
        <div class="container p-5 mt-5" id="form-container">
          <h1 class="text-center">丢失了东西？</h1>
          <h3 class="text-center">帮助我们来帮助您！</h3>
          <form class="mt-4" @submit.prevent="submitForm">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">姓名*</span>
              </div>
              <input type="text" class="form-control" v-model="form.name" placeholder="请输入姓名" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default" style="color: white; text-align: center;vertical-align: center">电子邮箱*</span>
              </div>
              <input type="email" class="form-control" v-model="form.email" placeholder="请输入电子邮箱" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">物品*</span>
              </div>
              <input type="text" class="form-control" v-model="form.item" placeholder="请输入物品名称" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">地点</span>
              </div>
              <input type="text" class="form-control" v-model="form.location" placeholder="如果记得请填写地点" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">图片*</span>
                <input id="file-upload" type="file" style="display: none;"/>
              </div>
              <input type="file" class="form-control"  placeholder="上传图片" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">日期*</span>
              </div>
              <input type="date" class="form-control" v-model="form.date" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">物品描述*</span>
              </div>
              <textarea class="form-control" v-model="form.description" placeholder="请描述物品特征…" aria-label="With textarea"></textarea>
            </div>
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary" id="inputGroup-sizing-default">奖励</span>
              </div>
              <input type="text" class="form-control" v-model="form.reward" placeholder="非必填" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="form-check mb-5">
              <input type="checkbox" class="form-check-input" v-model="form.terms" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">同意条款和条件</label>
            </div>
            <div class="submit-button text-center">
              <button type="submit" class="btn btn-outline-primary">提交</button>
            </div>
          </form>
        </div>

    </section>
  </main>
</template>

<script>
export default {
  name: 'LostItemForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        item: '',
        location: '',
        date: '',
        description: '',
        reward: '',
        terms: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      // 实现表单提交逻辑，可能需要调用API等
    }
  }
}
</script>

<style scoped>
@import "/src/assets/css/lostForm.css";
</style>
