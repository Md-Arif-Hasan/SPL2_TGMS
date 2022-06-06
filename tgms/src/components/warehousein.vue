<template>
  <div>
    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <!-- Navbar Brand -->
          <a href="#" class="navbar-brand">
            <img src="../assets/logo-3.png" alt="logo" width="150" />
          </a>
        </div>
      </nav>
    </header>

    <div class="container">
      <div class="row py-5 mt-0">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-12 mb-6 mb-md-10 col">
          <img
            src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
            alt=""
            class="img-fluid col-md-50 d-none d-md-block"
          />
          <h1>Warehouse Info</h1>
        </div>

        <!-- Registeration Form -->

        <div class="col-md-5 col-lg-5 ml-auto">
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

              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <select
                  v-model="item"
                  name="languages"
                  id="languages"
                  class="input100 col-lg-12 mb-12 form-control bg-white border-left-0 border-md"
                >
                  <option value="tea">Tea Leaf</option>
                  <option value="pesticide">Pesticide</option>
                  <option value="fertilizer">Fertilizer</option>
                </select>
              </div>

              <div class="input-group col-lg-12 mb-12">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <select
                  v-model="status"
                  name="languages"
                  id="languages"
                  class="input100 col-lg-12 mb-12 form-control bg-white border-left-0 border-md"
                >
                  <option value="1">Incoming</option>
                  <option value="0">Outgoing</option>
                </select>
              </div>

              <br />
              <div class="container-login100-form-btn container">
                <button class="login100-form-btn">Set Info</button>
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
      item: "tea",
      date: "",
      amount: "",
      status: 1,
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("/warehouseinsert.php", {
        item: this.item,
        date: this.date,
        amount: this.amount,
        status: this.status,
      });

      if (response.data[0].status == 1) {
        alert("Data insert successfully!");
        this.$router.push("/win");
      } else {
        alert(" Failed! ");
      }
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

.container {
  padding-top: 95px;
}
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
/* 
body {
  min-height: 100vh;
} */

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
