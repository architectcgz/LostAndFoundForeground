<template>
  <header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
      <a class="navbar-brand grow" href="../index.html">gotLost</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link grow" href="../index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link grow" href="lostForm.html">Lost</a>
          </li>
          <li class="nav-item">
            <a class="nav-link grow" href="foundForm.html">Found</a>
          </li>
          <li class="nav-item">
            <a class="nav-link grow" href="../about_us.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class"nav-link grow" href="#">Contact Us</a>
          </li>
        </ul>
        <a href="./register.html"><i class="fas fa-user signin grow"> SignIn</i></a>
      </div>
    </nav>
    <div class="heading text-center" style="margin-top: 2rem;">
      <h1 class="font-weight-bold text-dark">CONTACT US</h1>
    </div>
    <section class="discovery py-5">
      <div class="row align-items-center container mx-auto">
        <div class="img col-lg-6 col-md-6 col-12 w-50">
          <img src="../images/contactus.jpg" alt="image" class="img-fluid">
        </div>
        <div class="text col-lg-6 col-md-6 col-12 w-50">
          <div class="container mt-4" id="form-container">
            <h2 class="text-center">Feel free to contact us using this form <i class="far fa-smile-beam"></i></h2>
            <form action="contactus.html" class="text-center">
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-primary" id="inputGroup-sizing-default">Name</span>
                </div>
                <input type="text" name="name" placeholder="Name" class="form-control" id="name" aria-describedby="emailHelp">
              </div>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-primary" id="inputGroup-sizing-default">Email</span>
                </div>
                <input type="email" name="email" placeholder="john@gmail.com" class="form-control" id="email" aria-describedby="emailHelp">
              </div>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-primary" id="inputGroup-sizing-default">Phone No.</span>
                </div>
                <input type="text" name="phone" class="form-control" placeholder="+91 8888 8888" />
              </div>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-primary" id="inputGroup-sizing-default">Subject</span>
                </div>
                <textarea name="desc" class="form-control" id="desc" placeholder="Write Here..." cols="30" rows="2"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'ContactHeader'
}
</script>

<style scoped>
/* Place your CSS styles here */
</style>
