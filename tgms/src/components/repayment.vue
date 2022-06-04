<template>
  <div>
    <h1>{{ info }}</h1>
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
          <h1>Repayment</h1>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="row">
            <!-- TYpe -->

            <!--Date-->
            <!-- <div class="input-group col-lg-12 mb-4">
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
            </div> -->

            <!--  Name -->
            <div class="input-group col-lg-12 mb-4">
              <div class="input-group-prepend">
                <span
                  class="
                    input-group-text
                    bg-white
                    px-4
                    border-md border-right-0
                  "
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

            <br />
            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Repayment</button>
            </div>

            <!-- Already Registered -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // props:['info'],

  name: "repayment",

  components: {},

  data() {
    return {
      info: "",
      amount: "",
    };
  },

  methods: {
    async handleSubmit() {
      await axios
        .post("/repayment.php", {
          id: this.info.employeeid,
          amount: this.amount,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/flist");
        });
    },

    // getPdfLink() {
    //   this.info = this.$route.params.inf;

    //   console.log(this.info.id);
    //   axios.delete("/delete.php?id=" + this.info.id);
  },

  created() {
    this.info = this.$route.params.inf;
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

#button {
  padding-top: 100;
  padding-left: 400;
}
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
