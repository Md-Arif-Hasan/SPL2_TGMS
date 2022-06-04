<template>
  <div>
    <!-- Navbar-->
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <!-- Navbar Brand -->
          <a href="#" class=" -brand">
            <img
              src="../assets/logo-3.png"
              alt="logo"
              height="70"
              width="220"
            />
          </a>
        </div>
      </nav>
    </header>


    <div class="container">
      <div class="row py-5 mt-0 ">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-12 mb-6 mb-md-10 col ">
          <img
             src="../assets/search.jpg"
            alt=""
            class="img-fluid col-md-80 d-none d-md-block" 
            height="700"
              width="700"
          />
          <h1> Search Transactions</h1>
        </div>

        <!-- Registeration Form -->

        <div class="col-md-4 col-lg-4 ml-auto">

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
                  id="Date"
                  type="date"
                  name="firstname"
                  v-model="startdate"
                  placeholder=" Starting Date"
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
                <input
                  id="Date"
                  type="date"
                  name="firstname"
                  v-model="enddate"
                  placeholder=" Ending Date"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>


      
              <br />
              <div class="container-login100-form-btn container">
                <button class="login100-form-btn">Search</button>
              </div>

              <!-- Already Registered -->
            </div>
          </form>
        </div>
      </div>
    </div>

    


    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
        <div class="col" v-for="inf in info" :key="inf.sid">
          <div class="card radius-15">
            <div class="card-body text-center">
              <div class="p-4 border radius-15">
           
             <h5 class="mb-0 mt-5">Employee ID: {{ inf.employeeid }}</h5> <br>
                 <p class="mb-105">Amount: {{ inf.amount }}</p>
                 <p class="mb-105">TID: {{ inf.tid }}</p>
                  <p class="mb-105">Date: {{ inf.date }}</p>
          
                <!-- <div class="d-grid"> <router-link to="/profile" class="btn btn-outline-primary radius-15"> Go to Profile </router-link> -->

              

                <!-- <button
                  @click="
                    () => {
                      deleteTransaction(inf.tid);
                    }
                  "
                >
                  Delete Transaction
                </button> -->

                <!-- <button @click="deleteProfile(inf.id)">Send</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "transactionsearch",

  data() {
    return {
      startdate: "",
      enddate: "",
      info:""
    };
  },

  methods: {
    async handleSubmit() {
      await axios
        .post("/transactionsearch.php", {
          startdate: this.startdate,
          enddate: this.enddate
        })
       .then((response) => (this.info = response.data));
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

.container{
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



/*
*
* ==========================================
* FOR Amking boxes
* ==========================================
*
*/





body {
  background-color: #f7f7ff;
  margin-top: 20px;
}
.radius-15 {
  border-radius: 15px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgb(112, 151, 161);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
    0 2px 6px 0 rgb(206 206 238 / 54%);
}

element.style {
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.contacts-social a {
  font-size: 16px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background: #ffffff;
  border: 1px solid #eeecec;
  text-align: center;
  border-radius: 50%;
  color: #2b2a2a;
}
.bg-facebook {
  background-color: #3b5998 !important;
}
.bg-twitter {
  background-color: #55acee !important;
}
.bg-linkedin {
  background-color: #0976b4 !important;
}


</style>
