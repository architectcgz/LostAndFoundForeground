<template>
  <div class="container">
    <Navbar />
    <main class="main-content vw-100">
      <section class="about-section">
        <h1>关于我们</h1>
        <p>欢迎来到校园失物招领网站。我们致力于帮助校园内的学生和教职工找回丢失的物品。无论是丢失的书籍、电子设备，还是其他个人物品，我们都希望能为您提供帮助。</p>
        <h2>我们的使命</h2>
        <p>我们的使命是提供一个可靠的平台，帮助校园内的人员找回丢失的物品，减少因物品丢失带来的不便和困扰。我们相信，通过大家的共同努力，可以让校园变得更加安全和和谐。</p>
        <h2>如何使用</h2>
        <ul>
          <li><strong>发布失物信息：</strong> 如果您丢失了物品，可以在我们的网站上发布失物信息，描述丢失的物品及其相关细节。</li>
          <li><strong>查找失物：</strong> 您可以浏览网站上的失物信息，查看是否有人捡到您的物品，并联系失主。</li>
          <li><strong>认领物品：</strong> 如果您捡到了别人的物品，可以在我们的网站上发布招领信息，等待失主联系您。</li>
        </ul>
        <h2>联系我们</h2>
        <p>如果您有任何问题或建议，请随时与我们联系。您可以通过以下方式与我们取得联系：</p>
        <ul>
          <li>电子邮件: contact@lostandfoundcampus.com</li>
          <li>电话: (123) 456-7890</li>
          <li>办公室地址: 校园中心楼 101 室</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { Navbar, Footer },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.about-section {
  max-width: 800px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #333;
}

p {
  color: #555;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
  color: #555;
}

ul li strong {
  color: #333;
}
</style>
