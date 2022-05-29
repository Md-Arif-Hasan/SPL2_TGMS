<!--
<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <h1>Vue JS Axios - Image Upload using PHP API - ItSolutionStuff.com</h1>

      <form>
                
       <label align="left">ID </label>
        <input type="text" class="form-control"  v-model="employeeid" placeholder="ID"/>
         <label>Name </label>
        <input type="text" class="form-control"  v-model="ename" placeholder="Name"/>
        <label>Mobile Number </label>
        <input type="text" class="form-control"  v-model="mobile" placeholder="Mobile Number"/>

      </form>

              <br> <br>

      <label>File
        <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
      </label>
        <button v-on:click="submitForm()">Upload</button>



    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
  export default {
    data(){
      return {
        employeeid:'',
        ename:'',
        mobile:'',
        file: ''
      }
    },
  
    methods: {

      submitForm(){
            let formData = new FormData();
            formData.append('myfile', this.file);
            formData.append('employeeid',this.employeeid);
            formData.append('ename',this.ename);  
            formData.append('mobile',this.mobile);  

            axios.post('fileslogic.php',
                    formData,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data);
              console.log("Hello world");
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
      },
  
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

-->


<template>
<div>

<nav-2></nav-2>
<div class="login-box">
 
  <h2> Application for Loan</h2>
  <form>
    <div class="user-box">
      <input type="text" name="employeeid" required="" v-model="employeeid" placeholder="Employee ID">
      <label>Employee ID</label>
    </div>
    <div class="user-box">
      <input type="text" name="name" required="" v-model="ename" placeholder="Name" >
      <label>Name</label>
    </div>

     <div class="user-box">
      <input type="text" name="mobile" required="" v-model="mobile" placeholder="Mobile Number" >
      <label>Mobile Number</label>
    </div>

     <label style="font-weight: bold">File
        <input style="font-weight: bold" type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
      </label>

    <!-- <button href="#"  v-on:click="submitForm()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button> -->

     </form>

      <br> <button style="font-weight: bold" v-on:click="submitForm()">Upload</button>
</div>

</div>

</template>



<script>
import axios from 'axios';
import Nav2 from './Nav2.vue';
 export default{
    name: 'FileUp',
  components: {
    Nav2
  },
    data(){
      return {
        employeeid:'',
        ename:'',
        mobile:'',
        file: ''
      }
    },
  
    methods: {

      submitForm(){
            let formData = new FormData();
            formData.append('myfile', this.file);
            formData.append('employeeid',this.employeeid);
            formData.append('ename',this.ename);  
            formData.append('mobile',this.mobile);  

            axios.post('fileslogic.php',
                    formData,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data);
              console.log("Hello world");
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
             this.$router.push('/');
      },
  
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  
  }

 
</script>



<style scoped>


html {
  height: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#f7fbf8, #f1f3f2);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 450px;
  width: 850px;
  padding: 40px;
  transform: translate(-50%, -50%);

  background: rgb(52, 123, 131); 
 
 
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color:  #161817;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(11, 11, 11);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(230, 229, 229);
  outline: none;
  background: transparent;
  font-weight: bold;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  pointer-events: none;
  transition: .5s;
  font-weight: bold;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #0b0b0b;
  font-size: 12px;
  font-weight: bold;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #103537;
  color: rgb(7, 7, 7);
  border-radius: 5px;
  box-shadow: 0 0 5px #03484c,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}


</style>