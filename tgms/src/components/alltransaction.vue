<template>
  <div>
    <nav-2></nav-2>

    <h1 style="padding-top:100px"> Transaction History</h1>
    <br />


    <!-- <Profile v-bind:info="info"> </Profile> -->

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

    <b> <router-link to="/search"> Search </router-link></b>
  </div>
</template>

<script>
import axios from "axios";

import Nav2 from "./Nav2.vue";

export default {
  name: "alltransaction",
  components: {
    Nav2,
  },

  data() {
    return {
      info: "",
    };
  },
  mounted() {
    this.fetchInfo();
  },

  methods: {
    fetchInfo() {
      axios.get("/alltransaction.php").then((response) => (this.info = response.data));
    },


    // deleteTransaction(id) {
    //   console.log("hello");
    //   // return 'http://localhost/php_test/delete.php?id='+ this.inf.id ;
    //   axios.post("/delete.php?id=" + id).then(this.fetchInfo());
    // },
  },
};
</script>

<style scoped>

body {
  background-color: #0a584b;
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
  background-color: rgb(113, 163, 155);
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
