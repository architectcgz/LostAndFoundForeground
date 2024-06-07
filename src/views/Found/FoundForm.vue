<template>
  <div class="container" id="main-container">
    <div class="container p-5 mt-5" id="form-container">
      <h1 class="text-center">Glad To See You Here <i class="far fa-smile-beam"></i></h1>
      <form class="mt-4">
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Name*</span>
          </div>
          <input type="text" class="form-control" placeholder="John Cena" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Email*</span>
          </div>
          <input type="email" class="form-control" placeholder="cenajohn@gmail.com" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Item*</span>
          </div>
          <input type="text" class="form-control" placeholder="Item" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Location</span>
          </div>
          <input type="text" placeholder="If you remember" class="form-control" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Date*</span>
          </div>
          <input type="date" class="form-control" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Time*</span>
          </div>
          <input type="time" class="form-control" aria-label="Default">
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text bg-primary">Message</span>
          </div>
          <textarea class="form-control" placeholder="Your Message Here..." aria-label="With textarea"></textarea>
        </div>

        <div class="form-check mb-5">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">
            <a href="#">Agree terms and conditions</a>
          </label>
        </div>
        <div class="submit-button text-center">
          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent'
}
</script>


<style scoped>
@import "/src/assets/css/foundForm.css";
</style>
