<template>
  <!-- Sign up-->
  <div class="vh-100" id="customer-signup">
    <div class="container-fluid">
      <div style="background-color: #f8f9fa" class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/register.jpg"
            alt="Login image"
            class="w-100 vh-100 img-fluid"
            style="object-fit: cover; object-position: center"
          />
        </div>

        <div class="col-sm-6 text-black">
          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
          >
            <form style="width: 30rem">
              <div class="heading mt-0">
                <h4 class="d-flex justify-content-center fw-bold">
                  <span style="color: #0d6efd">Be an iCargo</span>
                  <span style="color: #ffc800"> Merchant</span>
                  <span style="color: #0d6efd"> today!</span>
                </h4>
                <h6 style="font-weight: 500" class="fw-bold text-center mb-2">
                  LET'S COLLABORATE!
                </h6>
                <h5 style="font-size: 11px" class="mb-2 fw-normal">
                  Get in touch with us to become our logistics partner!
                </h5>
                <h5 style="font-size: 14px; font-size: 12px" class="fw-bold">
                  Account details
                </h5>
              </div>

              <div class="row mb-2">
                <div class="col" style="font-size: 12px">
                  <div class="form-outline">
                    <label class="form-label form" for="form3Example1"
                      >First name</label
                    >
                    <input
                      style="width: 10rem"
                      type="text"
                      id="form3Example1"
                      class="form-control form-control-sm fs-6"
                      v-model="firstName"
                    />
                  </div>
                </div>
                <div class="col" style="font-size: 12px">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example2"
                      >Last name</label
                    >
                    <input
                      style="width: 9rem"
                      type="text"
                      id="form3Example2"
                      class="form-control form-control-sm fs-6"
                      v-model="lastName"
                    />
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4" style="font-size: 12px">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input
                  style="width: 25rem"
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-sm"
                  v-model="email"
                />
              </div>

              <div class="form-outline mb-4" style="font-size: 12px">
                <label class="form-label" for="typePhone">Contact Number</label>
                <input
                  style="width: 25rem"
                  type="tel"
                  id="typePhone"
                  class="form-control form-control-sm"
                  v-model="contact"
                />
              </div>

              <div class="form-outline mb-4" style="font-size: 12px">
                <label class="form-label" for="formTextExample2"
                  >Preferred Password</label
                >
                <input
                  style="width: 25rem"
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-sm"
                  aria-describedby="textExample2"
                  v-model="password"
                />
              </div>

              <div class="form-outline mb-4" style="font-size: 12px">
                <label class="form-label" for="formTextExample2"
                  >Re-type Preferred Password</label
                >
                <input
                  style="width: 25rem"
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-sm"
                  aria-describedby="textExample2"
                  v-model="retyepass"
                />
              </div>

              <div class="pt-1 mb-2 d-flex justify-content-center">
                <div class="btn-group me-2 top-0 mb-4">
                  <a
                    style="background-color: white"
                    class="btn btn- primary btn-sm btn-block text-dark shadow rounded border border-2"
                    href="signin.html"
                    role="button"
                    ><router-link to="/signup" class="text-decoration-none"
                      >Back</router-link
                    ></a
                  >
                </div>

                <div class="btn-group me-2 top-0 mb-4">
                  <a
                    class="btn btn-primary btn-sm btn-block text-dark shadow rounded border border-2"
                    href="signin.html"
                    role="button"
                    ><router-link
                      to="/dashboard"
                      class="text-decoration-none text-light"
                      @click="signUp"
                      >Sign up</router-link
                    ></a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer-signup'
};
</script>

<style>
#customer-signup .form-outline .btn {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 250px;
  border-radius: 20px;
}

#customer-signup .pt-1 .link-warning {
  text-decoration: none;
}

#customer-signup .pt-1 .btn-group {
  border: none;
}

/*--Container--*/

@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1320px;
  }
}
</style>
