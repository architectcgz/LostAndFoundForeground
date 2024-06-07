<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
      <a class="navbar-brand grow" href="#">HFUT失物招领处</a>
      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item grow">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item grow">
            <router-link to="/lost">失物</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/found">招领</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/about">关于我们</router-link>
          </li>
          <li class="nav-item grow">
            <router-link class="nav-link" to="/contact">联系我们</router-link>
          </li>
        </ul>
        <router-link to="/user/login" class="signin grow">登录</router-link>
      </div>
    </nav>
    <main>
      <section class="discovery container section-1">
        <div class="text col-lg-6 col-md-6 col-12 w-50 d-flex flex-column align-items-center justify-content-center">
          <h1 class="got-lost-heading mb-3">招领处</h1>
          <p>你捡到了一些失物?</p>
          <p class="mb-5">可以在这里帮助它找到失主!</p>
          <div class="shrink">
            <router-link class="learn-more" to="/user/register">去注册</router-link>
          </div>
        </div>
        <div class="img col-lg-6 col-md-6 col-12">
          <img src="/src/assets/images/lost-and-found.png" alt="image" class="img-fluid lost-found" />
        </div>
      </section>

      <section class="discovery-col-ak section-2">
        <div class="container">
          <div class="img col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
            <img src="/src/assets/images/community.png" alt="image" class="img-fluid border-top-20" />
          </div>
          <div class="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
            <h2 class="title mb-3">
              我们想做的
              <hr />
            </h2>
            <p class="mb-5">
              我们要通过帮助学生找回在学堂/宿舍区域丢失的宝贵物品来减轻寻找失物的压力。
              <br />
             这里有两个部分
              <b>一个是
                <router-link to="/lost">失物</router-link>部分，另一个是
              </b>
              <b>
                <router-link to="/found">招领</router-link>部分. 你可以告诉其他同学你丢失的宝贵物品，向他们寻求帮助。
                如果你找到了一些东西，你也可以帮助到其他人。
              </b>
              <br />
            </p>
            <div class="shrink d-inline-block">
              <router-link to="/learn-more" class="learn-more px-5">了解更多</router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="service section-3">
        <div class="col mx-auto align-items-center pt-5">
          <div class="heading text-center mb-5 pt-3">
            <h2 class="heading">
              我们拥有的服务
              <div class="d-flex justify-content-center">
                <hr />
              </div>
            </h2>
          </div>
          <div class="d-flex flex-row-reverse justify-content-between container">
            <div class="card-image w-50 col-lg-6 col-md-3 col-12 text-right">
              <img class="img-fluid w-100" src="/src/assets/images/lost-card.png" alt="" />
            </div>
            <div class="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card">
              <h5 class="card-title">失物</h5>
              <ul class="my-3">
                <li class="text-left mb-3">丢失的物品消息展示在这里</li>
                <li class="text-left mb-3">提交任何丢失信息的最长期限应为2天</li>
                <li class="text-left mb-3">尽量详细描述</li>
                <li class="text-left mb-5">如果你丢失了一些东西，请填写下面的表格</li>
              </ul>
              <div class="shrink">
                <router-link to="/lost" class="learn-more px-5">
                  前往
                </router-link>
              </div>
            </div>
          </div>

          <div class="d-flex flex-row justify-content-between container mt-5 pb-5">
            <div class="card-image w-50 col-lg-6 col-md-3 col-12 text-left">
              <img class="img-fluid w-100" src="/src/assets/images/found-card.png" alt="" />
            </div>
            <div class="one col-lg-6 col-md-3 col-12 w-50 m-2 align-items-center lost-found-card">
              <h5 class="card-title">招领</h5>
              <ul class="my-3">
                <li class="text-left mb-3">招领信息显示在这里</li>
                <li class="text-left mb-3">尽快填写信息，你可以尽早帮到失主</li>
                <li class="text-left mb-3">我们会尽可能减少教师的参与，这样可能有助于学生建立联系。</li>
                <li class="text-left mb-5">如果没有人来索要你找到的物品，最后老师会介入</li>
              </ul>
              <div class="shrink">
                <router-link class="learn-more px-5" to="/found" >前往</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-4">
        <div class="heading text-center mb-4 pt-5">
          <h2 class="heading pt-5">
            近期归还的物品
            <div class="d-flex justify-content-center">
              <hr />
            </div>
          </h2>
        </div>
        <div class="container">
          <div class="card-group">
            <div class="card">
              <img src="/src/assets/images/phone.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">手机</h5>
                <p class="card-text">Return By : <strong>三</strong></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">3分钟前更新</small>
              </div>
            </div>
            <div class="card mx-2">
              <img src="/src/assets/images/watch.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">手表</h5>
                <p class="card-text">Return By : <strong>小</strong></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">两天前更新</small>
              </div>
            </div>
            <div class="card">
              <img src="/src/assets/images/water-bottle.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">白色水壶</h5>
                <p class="card-text">Return By : <strong>达</strong></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">5分钟前更新</small>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer id="page-footer" class="py-2 bg-dark">
      <div class="container-fluid pb-5 pt-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4">
              <h4 class="text-dark">快速跳转</h4>
              <hr class="bg-primary" />
              <ul class="list-unstyled quick-links">
                <li>
                  <router-link to="/about_us">关于</router-link>
                </li>
                <li>
                  <router-link to="/user/register">注册</router-link>
                </li>
                <li>
                  <router-link to="/contact_us">联系我们</router-link>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <h4 class="text-dark">加入我们</h4>
              <hr class="bg-primary" />
              <ul class="social-icons list-unstyled">
                <li>
                  <a class="facebook grow" href="https://facebook.com" target="_blank">QQ</a>
                </li>
                <li>
                  <a class="instagram grow" href="https://instagram.com" target="_blank">Github</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <h4 class="text-dark">联系方式</h4>
              <hr class="bg-primary" />
              <ul class="list-unstyled quick-links">
                <li><a href="arccgz@gmail.com"> Email: arccgz@gmail.com</a></li>
                <li><a href="#"> Phone: +123 456 7890</a></li>
                <li><a href="#"> HFUT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>

<style scoped>
@import "/src/assets/css/homeStyle.css";

</style>
