<template>
  <div>
    <Navbar/>
    <main class="vw-100">
      <section class="discovery container section-1">
        <div class="
            text
            col-lg-6 col-md-6 col-12
            w-50
            d-flex
            flex-column
            align-items-center
            justify-content-center
          "
        >
          <h1 class="got-lost-heading mb-3">失物招领处</h1>

          <p>
            你捡到了一些失物?或者有东西遗失?
          </p>
          <p class="mb-5">
            可以在这里帮助它找到失主/向同学们寻求帮助!
          </p>
          <div class="shrink">
            <router-link to="/user/register" class="learn-more">现在注册</router-link>
          </div>
        </div>

        <div class="img col-lg-6 col-md-6 col-12">
          <img
              src="/src/assets/images/lost-and-found.png"
              alt="image"
              class="img-fluid lost-found"
          />
        </div>
      </section>

      <section class="discovery-col-ak section-2" style="width: fit-content">
        <div class="container">
          <div class="img col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
            <img
                src="/src/assets/images/community.png"
                alt="image"
                class="img-fluid border-top-20"
            />
          </div>
          <div class="text col-lg-6 col-md-6 col-12 w-50 pt-5 pb-5">
            <h2 class="title mb-3">
              我们想做的
              <hr />
            </h2>

            <p class="mb-5">
              我们要通过帮助学生找回在学堂/宿舍区域丢失的宝贵物品来减轻寻找失物的压力。<br />
              这里有两个部分
              <b>一个是<a>
                <router-link to="/lost">
                  失物
                </router-link>
              </a></b> 部分，另一个是
              <b><a>
                <router-link to="/found">
                  招领
                </router-link>
              </a></b> 部分. 你可以告诉其他同学你丢失的宝贵物品，向他们寻求帮助。 <br />
              如果你找到了一些东西，你也可以帮助到其他人。
            </p>
            <div class="shrink d-inline-block">
              <router-link to="/about" class="learn-more px-5">
                了解更多
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="service section-3">
        <div class="col mx-auto align-items-center pt-5">
          <div class="heading text-center mb-5 pt-3">
            <h2 class="heading">
              我们的服务
              <div class="d-flex justify-content-center">
                <hr />
              </div>
            </h2>
          </div>
          <div
              class="d-flex flex-row-reverse justify-content-between container"
          >
            <div class="card-image w-50 col-lg-6 col-md-3 col-12 text-right">
              <img class="img-fluid w-100" src="/src/assets/images/lost-card.png" alt="" />
            </div>
            <div
                class="
                one
                col-lg-6 col-md-3 col-12
                w-50
                m-2
                align-items-center
                lost-found-card
              "
            >
              <h5 class="card-title">失物</h5>
              <ul class="my-3">
                <li class="text-left mb-3">
                  丢失的物品消息展示在这里
                </li>
                <li class="text-left mb-3">
                  提交任何丢失信息的最长期限应为2天
                </li>
                <li class="text-left mb-3">
                  尽量详细描述
                </li>
                <li class="text-left mb-5">
                  如果你丢失了一些东西，请填写下面的表格
                </li>
              </ul>

              <div class="shrink">
                <router-link to="/lost/form" class="learn-more px-5">
                  前往
                </router-link>
              </div>
            </div>
          </div>
          <div
              class="d-flex flex-row justify-content-between container mt-5 pb-5"
          >
            <div class="card-image w-50 col-lg-6 col-md-3 col-12 text-left">
              <img class="img-fluid w-100" src="/src/assets/images/found-card.png" alt="" />
            </div>
            <div
                class="
                one
                col-lg-6 col-md-3 col-12
                w-50
                m-2
                align-items-center
                lost-found-card
              "
            >
              <h5 class="card-title">招领</h5>
              <ul class="my-3">
                <li class="text-left mb-3">
                  招领信息显示在这里
                </li>
                <li class="text-left mb-3">
                  尽快填写信息，你可以尽早帮到失主
                </li>
                <li class="text-left mb-3">
                  我们会尽可能减少教师的参与，这样可能有助于学生建立联系。
                </li>
                <li class="text-left mb-5">
                  如果没有人来索要你找到的物品，最后老师会介入
                </li>
              </ul>

              <div class="shrink">
                <router-link to="/found" class="learn-more px-5">
                  前往
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RECENT RETURNS -->

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
                <p class="card-text">
                  Return By : <strong>Ishan Mishra</strong>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">3分钟前更新</small>
              </div>
            </div>
            <div class="card mx-2">
              <img src="/src/assets/images/watch.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">WRIST WATCH</h5>
                <p class="card-text">
                  Return By : <strong>Rawat Senpai</strong>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 2 days ago</small>
              </div>
            </div>
            <div class="card">
              <img
                  src="/src/assets/images/water-bottle.jpg"
                  class="card-img-top"
                  alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">WATER BOTTLE</h5>
                <p class="card-text">
                  Return By : <strong>Srishti Shukla</strong>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 days ago</small>
              </div>
            </div>
          </div>
          <div class="card-group mt-2">
            <div class="card">
              <img src="/src/assets/images/airpods.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">AIRPPODS</h5>
                <p class="card-text">
                  Return By : <strong>MR. PALINDROME</strong>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 5 days ago</small>
              </div>
            </div>
            <div class="card mx-2">
              <img src="/src/assets/images/football.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">FOOTBALL</h5>
                <p class="card-text">Return By : <strong>MESSI</strong></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 7 days ago.</small>
              </div>
            </div>
            <div class="card">
              <img src="/src/assets/images/headphone.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">HEADPHONE</h5>
                <p class="card-text">
                  Return By : <strong>CHRISTENSON</strong>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 8 days ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom text-center mt-5 pb-5">
          <div class="shrink">
            <router-link to="/gallery-returned" class="learn-more px-5">
              View More
            </router-link>
          </div>
        </div>
      </section>
      <section class="service section-5 w-100">
        <div class="row align-items-center container mx-auto py-5">
          <div class="img col-lg-6 col-md-6 col-12 w-75">
            <img src="/src/assets/images/mission.png" alt="image" class="img-fluid" />
          </div>
          <div class="text col-lg-6 col-md-6 col-12 w-75">
            <h2 class="title mb-3">
              我们的目标
              <hr />
            </h2>
            <p class="mb-5">
              <br />
              希望
              <b><router-link to="/lost">LOST</router-link></b> 模块能减轻你寻找失物的压力 <br />
            </p>
            <div class="shrink d-inline-block">
              <router-link class="learn-more" to="/about">了解更多</router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="section-primary t-bordered section-6 w-100">
        <div class="heading text-center mb-4">
          <h2 class="heading">
            Contributors
            <div class="d-flex justify-content-center">
              <hr />
            </div>
          </h2>
        </div>
        <div class="container pb-5">
          <div class="row testimonial-three testimonial-three--col-three" style="align-content: center">

            <div class="col-md-4 testimonial-three-col">
              <a href="https://github.com/architectcgz">
                <div class="testimonial-inner">
                <div class="testimonial-image" itemprop="image">
                  <img alt=""
                       width="180"
                       height="180"
                       src="https://avatars.githubusercontent.com/u/119087313?s=400&u=64db8b6e53e545bc382427d08df8c7042a090165&v=4"
                  />
                </div>
                <div class="testimonial-meta mb-2">
                  <strong class="testimonial-name" itemprop="name"
                  >Czf</strong
                  >
                </div>
                <div class="testimonial-content">
                  <p>
                    Made home and etc...
                  </p>
                </div>
              </div>
              </a>
            </div>

            <div class="col-md-4 testimonial-three-col">
              <a href="https://github.com/lixueyuan123886">
                <div class="testimonial-inner">
                  <div class="testimonial-image" itemprop="image">
                    <img
                        width="180"
                        height="180"
                        src="https://avatars.githubusercontent.com/u/130809523?s=64&v=4"
                    />
                  </div>
                  <div class="testimonial-meta mb-2">
                    <strong class="testimonial-name" itemprop="name"
                    >lixueyuan123886</strong
                    >
                  </div>
                  <div class="testimonial-content">
                    <p>
                      Really a lot of work!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
  @import "/src/assets/css/homeStyle.css";

</style>