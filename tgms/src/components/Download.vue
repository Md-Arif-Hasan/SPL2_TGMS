<template>
  <div>
    <h1>Application List</h1>

    <table id="customers">
      <tr>
        <th>Employee Name</th>
        <th>Mobile Number</th>
        <th>File Name</th>
        <th>Download</th>
        <th>Confirm Approval</th>
      </tr>

      <tr v-for="inf in info" :key="inf.sid">
        <td>{{ inf.ename }}</td>
        <td>{{ inf.mobile }}</td>
        <td>{{ inf.name }}</td>
        <td class="container-login100-form-btn">
          <button>
            <a
              :href="
                'http://localhost/php_test/downloads.php?file_id=' + inf.id
              "
              class="btn"
            >
              Download
            </a>
          </button>
        </td>

        <td class="container-login 00-form-btn">
          <button>
            <router-link to="/set" class="nav-link"> Approved </router-link>
          </button>

          <button
            @click="
              () => {
                deleteProfile(inf.id);
              }
            "
          >
            Reject
          </button>
        </td>
      </tr>

      <!-- <tr>
         <div v-for="inf in info" :key="inf.sid"> 
            <td>  Name: {{inf.name }} </td>

         </div>

    </tr> -->
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Download",

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
      axios
        .get("/fileview.php")
        .then((response) => (this.info = response.data));
    },

    deleteProfile(id) {
      console.log("hello");
      // return 'http://localhost/php_test/delete.php?id='+ this.inf.id ;
      axios.post("/deletefile.php?id=" + id).then(this.fetchInfo());
    },
  },
};
</script>

<!--

<script>
import axios from 'axios'

import Nav2 from './Nav2.vue'

export default{
    name: 'Profile',
    components:{
            Nav2
    },


  data () {
    return {
      info: ''
    }
  },
  mounted () {
    axios
      .get('/readall.php')
      
      .then(response => (this.info = response.data))
       
  }
}

</script>

-->

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}

td {
  text-align: center;
}
</style>
