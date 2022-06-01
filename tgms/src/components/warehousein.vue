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

        <div class="col-md-5 col-lg-5 ml-auto">
          <input
            type="radio"
            id="html"
            name="fav_language"
            v-model="item"
            value="tea"
          />
          <label for="html"> Tea Leaf </label><br />

          <input
            type="radio"
            id="html"
            name="fav_language"
            v-model="item"
            value="fertilizer"
          />
          <label for="html"> Fertilizer </label>
          <br />
          <input
            type="radio"
            id="html"
            name="fav_language"
            v-model="item"
            value="pesticide"
          />
          <label for="html"> Pesticides </label> <br />

          <form @submit.prevent="handleSubmit">
            <div class="row">
              <!-- TYpe -->

              <!--Date-->
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
                  type="date"
                  name="firstname"
                  v-model="date"
                  placeholder="Date"
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
                  v-model="amount"
                  placeholder=" Amount"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Submit Button -->
              <!-- <div class="form-group col-lg-12 mx-auto mb-0">
                <a href="#" class="btn btn-primary btn-block py-2">
                  <span class="font-weight-bold"> Add Information</span>
                </a>
              </div> -->

              <div class="col-md-5 col-lg-5 ml-auto">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  v-model="status"
                  value="1"
                />
                <label for="html"> Incoming </label><br />

                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  v-model="status"
                  value="0"
                />
                <label for="html"> Outgoing </label>
                <br />
              </div>

              <br />
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
      item: "",
      date: "",
      amount: "",
      status: "",
    };
  },

  methods: {
    async handleSubmit() {
      await axios
        .post("/warehouseinsert.php", {
          item: this.item,
          date: this.date,
          amount: this.amount,
          status: this.status,
        })
        .then((res) => {
          console.log(res);
        });
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
