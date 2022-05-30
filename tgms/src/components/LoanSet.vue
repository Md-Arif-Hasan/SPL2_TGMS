<!--


<template>
<div>
<nav-2></nav-2>
<div class="login-box">
  <h2> Loan Set</h2>
  <form  @submit.prevent="handleSubmit" >
    <div class="user-box">
      <input type="text" name="employeeid" required="" v-model="id" placeholder="Employee ID">
      <label>Employee ID</label>
    </div>
    <div class="user-box">
      <input type="text" name="name" required="" v-model="name" placeholder="Name" >
      <label>Name</label>
    </div>

     <div class="user-box">
      <input type="text" name="mobile" required="" v-model="mobile" placeholder="Mobile Number" >
      <label>Mobile Number</label>
    </div>

     <div class="user-box">
      <input type="text" name="money" required="" v-model="amount" placeholder="Loan Amount" >
      <label>Loan Amount</label>
    </div>

 
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Save
						</button>
					</div>
     </form>
</div>
</div>
</template>


<script>
import axios from 'axios';
import Nav2 from './Nav2.vue';
 export default{
    name: 'LoanSet',
  components: {
    Nav2
  },
        data(){
            return{
                id : '',
                name:'',
                mobile:'',
                amount:''
            }
        },

        methods:{
            
            async handleSubmit(){
              console.log("ererwr");
                  await axios.post('/fileapproval.php', {
                    id: this.id,
                    name:this.name,
                    mobile : this.mobile,
                   amount: this.amount
              }).then(res=>{
                  console.log(res)
              });

            console.log("Succesfull");
            //console.log(response);
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

  background: rgb(139, 180, 138); 
 
 
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
  box-shadow: 0 0 5px #196b50,
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

-->

<template>
  

  <div class="container register">
<div class="row">
<div class="col-md-3 register-left">
<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="">
<h3>Welcome</h3>
<p>Tes tulisan abcdefghijklmnopqrstuvwxy
1234567890</p>
<input type="submit" name="" value="Login"><br>
</div>
<div class="col-md-9 register-right">
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<h3 class="register-heading">Daftar Akun</h3>
<div class="row register-form">
<div class="col-md-6">
<div class="form-group">
<input type="text" class="form-control" placeholder="ID *" value="">
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Nama Lengkap *" value="">
</div>
<div class="form-group">
<input type="password" class="form-control" placeholder="Password *" value="">
</div>
<div class="form-group">
<input type="password" class="form-control" placeholder="Konfirmasi Password *" value="">
</div>
<div class="form-group">
<div class="maxl">
<label class="radio inline">
<input type="radio" name="gender" value="laki-laki" checked="">
<span> Laki-laki </span>
</label>
<label class="radio inline">
<input type="radio" name="gender" value="perempuan">
<span>Perempuan </span>
</label>
</div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<input type="username" class="form-control" placeholder="Username *" value="">
</div>
<div class="form-group">
<input type="text" minlength="10" maxlength="13" name="Phone" class="form-control" placeholder="No HP *" value="">
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Alamat Rumah *" value="">
</div>
<input type="submit" class="btnRegister" value="Register">
</div>
</div>
</div>
</div>
</div>
</div>
</div> 

</template>


<style scoped>


.register{
background: -webkit-linear-gradient(left, #3931af, #00c6ff);
margin-top: 3%;
padding: 3%;
}
.register-left{
text-align: center;
color: #fff;
margin-top: 4%;
}
.register-left input{
border: none;
border-radius: 1.5rem;
padding: 2%;
width: 60%;
background: #f8f9fa;
font-weight: bold;
color: #383d41;
margin-top: 30%;
margin-bottom: 3%;
cursor: pointer;
}
.register-right{
background: #f8f9fa;
border-top-left-radius: 10% 50%;
border-bottom-left-radius: 10% 50%;
}
.register-left img{
margin-top: 15%;
margin-bottom: 5%;
width: 25%;
-webkit-animation: mover 2s infinite alternate;
animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
0% { transform: translateY(0); }
100% { transform: translateY(-20px); }
}
@keyframes mover {
0% { transform: translateY(0); }
100% { transform: translateY(-20px); }
}
.register-left p{
font-weight: lighter;
padding: 12%;
margin-top: -9%;
}
.register .register-form{
padding: 10%;
margin-top: 10%;
}
.btnRegister{
float: right;
margin-top: 10%;
border: none;
border-radius: 1.5rem;
padding: 2%;
background: #0062cc;
color: #fff;
font-weight: 600;
width: 50%;
cursor: pointer;
}
.register .nav-tabs{
margin-top: 3%;
border: none;
background: #0062cc;
border-radius: 1.5rem;
width: 28%;
float: right;
}
.register .nav-tabs .nav-link{
padding: 2%;
height: 34px;
font-weight: 600;
color: #fff;
border-top-right-radius: 1.5rem;
border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
border: none;
}
.register .nav-tabs .nav-link.active{
width: 100px;
color: #0062cc;
border: 2px solid #0062cc;
border-top-left-radius: 1.5rem;
border-bottom-left-radius: 1.5rem;
}
.register-heading{
text-align: center;
margin-top: 8%;
margin-bottom: -15%;
color: #495057;
}


</style>