<template>
  <main>
    <section>
      <div class="container" id="main-container">
        <div class="image">
          <img src="../images/lost-2.jpg" alt="丢失物品图片">
        </div>

        <div class="container p-5 mt-5" id="form-container">
          <h1 class="text-center">丢失了东西？</h1>
          <h3 class="text-center">帮助我们来帮助您！</h3>
          <form class="mt-4" @submit.prevent="submitForm">
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">姓名*</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入您的姓名" v-model="form.name">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">邮箱*</span>
              </div>
              <input type="email" class="form-control" placeholder="请输入您的邮箱" v-model="form.email">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">物品名称*</span>
              </div>
              <input type="text" class="form-control" placeholder="请输入物品名称" v-model="form.itemName">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">丢失地点</span>
              </div>
              <input type="text" placeholder="如果记得，请输入" class="form-control" v-model="form.location">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">日期*</span>
              </div>
              <input type="date" class="form-control" v-model="form.date">
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">物品描述*</span>
              </div>
              <textarea class="form-control" placeholder="例如：它是黑色的…" v-model="form.description"></textarea>
            </div>
            <div class="input-group mb-5">
              <div class="input-group-prepend">
                <span class="input-group-text bg-primary">奖励</span>
              </div>
              <input type="text" placeholder="非必需" class="form-control" v-model="form.reward">
            </div>
            <div class="form-check mb-5">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="form.agree">
              <label class="form-check-label" for="exampleCheck1">同意条款和条件</label>
            </div>
            <div class="submit-button text-center">
              <button type="submit" class="btn btn-outline-primary">提交</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        itemName: '',
        location: '',
        date: '',
        description: '',
        reward: '',
        agree: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log("表单已提交", this.form);
      alert('表单已成功提交！请查看控制台获取数据。');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  background: #030027;
  padding: 1rem 8rem;
  z-index: 1000;
}

.navbar .navbar-brand {
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Monoton', cursive;
}

.navbar .navbar-brand:hover {
  color: #caac00;
}
ul li {
  margin: 0px 10px;
}

#navbarSupportedContent>ul>li:nth-child(n)>a {
  color: #fff;
  font-size: 1.1rem;
  padding: 0 0.8rem;
  cursor: pointer;
}

#navbarSupportedContent>ul>li:nth-child(n)>a:hover {
  color: #caac00;
}

.signin {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.signin:hover {
  color: #caac00;
}

.grow {
  transition: all 0.3s;
}

.grow:hover {
  transform: scale(1.2);
}

#navbarSupportedContent>button:hover {
  background: rgb(22, 138, 113);
}

#form-container {
  max-width: 900px;
  width: 100%;
  background-color: white;
}

.input-group-text {
  color: #ffffff;
  letter-spacing: 1px;
  font-family: 'Montserrat';
}

h1, h3 {
  color: #030027;
}

.image {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
}

#main-container {
  max-width: 80%;
  min-height: 100vh;
  display: flex;
}

footer small {
  word-spacing: 1px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.616);
  margin-left: 10em;

  cursor: pointer;
}

small span:hover {
  color: white;
}

.brand a {
  font-family: 'Monoton', cursive;
  color: rgba(255, 255, 255, 0.582);
  font-size: 2rem;
  cursor: pointer;
}

.brand a:hover {
  color: white;
}

#sticky-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
