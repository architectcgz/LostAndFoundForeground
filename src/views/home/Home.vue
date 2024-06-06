<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark vw-100">
      <router-link to="/" class="navbar-brand grow">gotLost</router-link>
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
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/lost" class="nav-link">失物处</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/found" class="nav-link">招领处</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/about" class="nav-link">关于我们</router-link>
          </li>
          <li class="nav-item grow">
            <router-link to="/contact" class="nav-link">联系我们</router-link>
          </li>
        </ul>

        <router-link to="/user/login"><i class="fas fa-user signin grow">登录</i></router-link>
      </div>
    </nav>

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
          <h1 class="got-lost-heading mb-3">招领处</h1>

          <p>
            你捡到了一些失物?
          </p>
          <p class="mb-5">
            可以在这里帮助它找到失主!
          </p>
          <div class="shrink">
            <a class="learn-more" href="forms/register.html">现在注册</a>
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
              <b>一个是<a href="forms/lostForm.html">失物</a></b> 部分，另一个是
              <b><a href="forms/foundForm.html">招领</a></b> 部分. 你可以告诉其他同学你丢失的宝贵物品，向他们寻求帮助。 <br />
              如果你找到了一些东西，你也可以帮助到其他人。
            </p>
            <div class="shrink d-inline-block">
              <a class="learn-more px-5" href="about_us.html">了解更多</a>
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
                <a class="learn-more px-5" href="forms/lostForm.html">前往</a>
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
                <a class="learn-more px-5" href="forms/foundForm.html">前往</a>
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
            <a class="learn-more px-5" href="gallery.html">View More</a>
          </div>
        </div>
      </section>
      <section class="service section-5">
        <div class="row align-items-center container mx-auto py-5">
          <div class="img col-lg-6 col-md-6 col-12 w-75">
            <img src="/src/assets/images/mission.png" alt="image" class="img-fluid" />
          </div>
          <div class="text col-lg-6 col-md-6 col-12 w-75">
            <h2 class="title mb-3">
              OUR MISSION
              <hr />
            </h2>
            <p class="mb-5">
              Our mission  <br />
              We all know
              <b><a href="forms/lostForm.html">LOST</a></b> section so that we
              can get you out of this stress ASAP. <br />
              Even this page is created and managed by some of the students, so
            </p>
            <div class="shrink d-inline-block">
              <a class="learn-more" href="about_us.html">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section-primary t-bordered section-6">
        <div class="heading text-center mb-4">
          <h2 class="heading">
            TESTIMONIALS
            <div class="d-flex justify-content-center">
              <hr />
            </div>
          </h2>
        </div>
        <div class="container pb-5">
          <div class="row testimonial-three testimonial-three--col-three">
            <div class="col-md-4 testimonial-three-col">
              <div class="testimonial-inner">
                <div class="testimonial-image" itemprop="image">
                  <img
                      width="180"
                      height="180"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </div>
                <div class="testimonial-meta mb-2">
                  <strong class="testimonial-name" itemprop="name"
                  >Rawat Senpai</strong
                  >
                </div>
                <div class="testimonial-content">
                  <p>
                    Not gonna lie friends, it really worked for me, I lost my
                    watch and was abe to retrieve it within a week. And the
                    relief i got after that was just immense. Can’t thank you
                    guys enough.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 testimonial-three-col">
              <div class="testimonial-inner">
                <div class="testimonial-image" itemprop="image">
                  <img
                      width="180"
                      height="180"
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  />
                </div>
                <div class="testimonial-meta mb-2">
                  <strong class="testimonial-name" itemprop="name"
                  >Ishan Mishra</strong
                  >
                </div>
                <div class="testimonial-content">
                  <p>
                    Here to share this wonderful experience when i lost my book
                    and luckily a senior from the course same as mine returned
                    it to me and they also help me with my acedemics very often
                    now. Thanks a lot fot this.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 testimonial-three-col">
              <div class="testimonial-inner">
                <div class="testimonial-image" itemprop="image">
                  <img
                      width="180"
                      height="180"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  />
                </div>
                <div class="testimonial-meta mb-2">
                  <strong class="testimonial-name" itemprop="name"
                  >Srishti Shukla</strong
                  >
                </div>
                <div class="testimonial-content">
                  <p>
                    At first i didn’t put so much faith in this, but later when
                    I got back my Headphone I can’t express how good I felt. And
                    I never imagined that i’ll get it back but i was wrong and i
                    got it back. And i never knew that my collegemates were so
                    good and helpful. Thanks guys it means a lot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer id="page-footer" class="py-2 bg-dark">
      <div class="brand">
        <router-link class="navbar-brand" to="/">gotLost</router-link>
      </div>
      <div class="copyright">
        <small>
          <span>Copyright &copy;</span> <span>All Rights Reserved</span>
          <span>Terms of Use</span> and <span>Privacy Policy</span></small
        >
      </div>
      <br>
      <hr>
      <div class="favicon">
        <router-link to="#"><i class="social-media fab fa-facebook-f fa-2x"></i></router-link>
        <router-link to="#"><i class="social-media fab fa-twitter fa-2x"></i></router-link>
        <router-link to="#"><i class="social-media fab fa-instagram fa-2x"></i></router-link>
        <router-link to="#"><i class="social-media fas fa-envelope fa-2x"></i></router-link>
      </div>

      <div class="BackToTop">
        <a id="back-to-top" href="#"  role="button"><i class="back fas fa-chevron-up fa-2x"></i></a>
        <h4>Back To Top</h4>
      </div>

    </footer>
  </div>
</template>

<script setup>

</script>

<style>
  @import "/src/assets/css/homeStyle.css";

</style>