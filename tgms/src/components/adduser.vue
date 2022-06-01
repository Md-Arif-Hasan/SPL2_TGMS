<template>
  <div>
    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <!-- Navbar Brand -->
          <a href="#" class="navbar-brand">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg"
              alt="logo"
              width="150"
            />
          </a>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
            src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
            alt=""
            class="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Add a User</h1>
        </div>

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <!-- ID-->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                  id="Name"
                  type="text"
                  name="firstname"
                  v-model="id"
                  placeholder="Employee ID"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!--  Name -->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                  id="firstName"
                  type="text"
                  name="firstname"
                  v-model="name"
                  placeholder=" Name"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Phone Number -->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-phone-square text-muted"></i>
                  </span>
                </div>

                <input
                  id="phoneNumber"
                  type="tel"
                  name="phone"
                  v-model="mobile"
                  placeholder="Phone Number"
                  class="form-control bg-white border-md border-left-0 pl-3"
                />
              </div>
              .

              <!-- Submit Button -->
              <!-- <div class="form-group col-lg-12 mx-auto mb-0">
                <a href="#" class="btn btn-primary btn-block py-2">
                  <span class="font-weight-bold"> Add Information</span>
                </a>
              </div> -->

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">Register</button>
              </div>

              <!-- Already Registered -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",

  data() {
    return {
      id: "",
      name: "",
      mobile: "",
    };
  },

  methods: {
    async handleSubmit() {
      await axios
        .post("/insertuser.php", {
          id: this.id,
          name: this.name,

          mobile: this.mobile,
        })
        .then((res) => {
          console.log(res);
        });

      localStorage.setItem("id", this.id);

      this.$router.push("/emplist");
      console.log("Succesfull");
    },
  },
};
</script>

<style scoped>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.border-md {
  border-width: 2px;
}

.btn-facebook {
  background: #405d9d;
  border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
  background: #314879;
}

.btn-twitter {
  background: #42aeec;
  border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1799e4;
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

body {
  min-height: 100vh;
}

.form-control:not(select) {
  padding: 1.5rem 0.5rem;
}

select.form-control {
  height: 52px;
  padding-left: 0.5rem;
}

.form-control::placeholder {
  color: #ccc;
  font-weight: bold;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
}
</style>
