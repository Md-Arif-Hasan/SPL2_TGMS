<!--
<template>
  <div class="zone" @submit.prevent="handleSubmit">
    <div id="dropZ">
      <i class="fa fa-cloud-upload"></i>
      <div>Drag and drop your file here</div>
      <span>OR</span>

      <div class="selectFile">
        <label for="file">Select file</label>
        <input type="file" name="files[]" id="file" />
      </div>

      <p>File size limit : 10 MB</p>

      <div class="container-login100-form-btn">
        <button type="submit" name="save" class="login100-form-btn">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>



<script>
 import axios from "axios";
export default {
 
  name: "Login",

  data() {
    return {
      image: "",
    };
  },

  methods: {
 
      await axios.post("fileslogic.php", {
        image: this.image
      })
   
  },
};
</script>





<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: ''
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/fileslogic.php',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo+2:400,700,500,300);

body {
  background: #ebeff2;
  font-family: "Exo 2";
}

.zone {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: radial-gradient(ellipse at center, #eb6a5a 0, #c9402f 100%);
  width: 80%;
  height: 50%;
  border: 5px dashed white;
  text-align: center;
  color: white;
  z-index: 20;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
  .btnCompression {
    .btn {
    }
    .active {
      background: #eb6a5a;
      color: white;
    }
  }
  i {
    text-align: center;
    font-size: 10em;
    color: #fff;
    margin-top: 50px;
  }
  .selectFile {
    height: 50px;
    margin: 20px auto;
    position: relative;
    width: 200px;
  }

  label,
  input {
    cursor: pointer;
    display: block;
    height: 50px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 5px;
  }

  label {
    background: #fff;
    color: #eb6a5a;
    display: inline-block;
    font-size: 1.2em;
    line-height: 50px;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 400;
    box-shadow: 0 1px 1px gray;
  }

  input[type="file"] {
    opacity: 0;
  }
}
.zone.in {
  color: white;
  border-color: white;
  background: radial-gradient(ellipse at center, #eb6a5a 0, #c9402f 100%);
  i {
    color: #fff;
  }
  label {
    background: #fff;
    color: #eb6a5a;
  }
}
.zone.hover {
  color: gray;
  border-color: white;
  background: #fff;
  border: 5px dashed gray;
  i {
    color: #eb6a5a;
  }
  label {
    background: #fff;
    color: #eb6a5a;
  }
}
.zone.fade {
  transition: all 0.3s ease-out;
  opacity: 1;
}
</style>

-->


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

        <br> <br>

        </form>

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
        file: ''
      }
    },
  
    methods: {

      submitForm(){
            let formData = new FormData();
            formData.append('myfile', this.file);
            formData.append('employeeid',this.employeeid);  

            axios.post('fileemp.php',
                    formData,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
        