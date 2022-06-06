<template>
  <div>
    <nav-2></nav-2>

    <h1>Employee list</h1>
    <br />
    <br />
    <button>
      <router-link to="/add" class="nav-link fa-1x" id="button">
        Add Employee
      </router-link>
    </button>

    <!-- <Profile v-bind:info="info"> </Profile> -->

    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
        <div class="col" v-for="(inf, index) in info" :key="inf.sid">
          <div class="card radius-15">
            <div class="card-body text-center">
              <div class="p-4 border radius-15">
                <img
                  :src="getImageURL(index)"
                  width="110"
                  height="110"
                  class="rounded-circle shadow"
                  alt=""
                />

                <h5 class="mb-0 mt-5">Name: {{ inf.name }}</h5>
                <p class="mb-3">Mobile: {{ inf.mobile }}</p>
                <div class="list-inline contacts-social mt-3 mb-3">
                  <a
                    href="javascript:;"
                    class="list-inline-item bg-facebook text-white border-0"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                  <a
                    href="javascript:;"
                    class="list-inline-item bg-twitter text-white border-0"
                    ><i class="bx bxl-twitter"></i
                  ></a>
                  <a
                    href="javascript:;"
                    class="list-inline-item bg-linkedin text-white border-0"
                    ><i class="bx bxl-linkedin"></i
                  ></a>
                </div>
                <!-- <div class="d-grid"> <router-link to="/profile" class="btn btn-outline-primary radius-15"> Go to Profile </router-link> -->

                <router-link :to="{ name: 'Profile', params: { inf } }">
                  Visit Profile</router-link
                >

                <button
                  @click="
                    () => {
                      deleteProfile(inf.id);
                    }
                  "
                >
                  Delete User
                </button>

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

import Nav2 from "./Nav2.vue";

export default {
  name: "EmployeeList",
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
      axios.get("/readall.php").then((response) => (this.info = response.data));
    },
    getImageURL(index) {
      return (
        "https://bootdey.com/img/Content/avatar/avatar" + (index + 1) + ".png"
      );
    },

    deleteProfile(id) {
      console.log("hello");
      // return 'http://localhost/php_test/delete.php?id='+ this.inf.id ;
      const response = axios.post("/delete.php?id=" + id);

      if (response.data[0].status == 1) {
        alert(" User Deleted!");
      }
    },
  },
};
</script>

<style scoped>
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
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgba(8, 8, 8, 0.65),
    0 2px 6px 0 rgba(19, 81, 114, 0.54);
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

.container {
  padding-top: 50px;
}
#button {
  padding-left: 50px;
  font: bold;
}
</style>
