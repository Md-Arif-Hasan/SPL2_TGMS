<template>

<div>

<h1>Apllication List</h1>

<table id="customers">
  <tr>
    <th> Serial Number</th>
    <th>File Name</th>
    <th>Download</th>
  </tr>

  <tr v-for="inf in info" :key="inf.sid"> 

  
    <td>{{inf.id}}</td>
    <td>{{inf.name}}</td>
    <td class="container-login100-form-btn">
       <button class="login100-form-btn"><a :href="'http://localhost/php_test/downloads.php?file_id='+inf.id" class="btn btn-primary">Submit</a> </button>
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
 import axios from 'axios';
export default {

  name: "Download",


//   data() {
//     return {

//     };
//   },
// methods:{
//   getPdfLink(){
//     return 'http://localhost/php_test/attendance.php?id='+ localStorage.getItem('sid')+'&month='+this.month;
//   }
// }



  data () {
    return {
      info: ''
    }
  },
  mounted () {
    axios
      .get('/fileview.php')
      
      .then(response => (this.info = response.data))
       
  }, 

// methods:{
//   getPdfLink(){
//     //return 'http://localhost/php_test/attendance.php?id='+ localStorage.getItem('sid')+'&month='+this.month;

//     return 'http://localhost/php_test/downloads.php?file_id='+15;
//   }
// }

}

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

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>