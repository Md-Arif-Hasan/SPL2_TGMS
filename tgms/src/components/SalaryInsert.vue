<template>
  <div>

      <nav-2></nav-2>
    <!-- Navbar-->

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
            <!-- Navbar Brand -->
            <a href="#" class="navbar-brand">
                <img src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg" alt="logo" width="150">
            </a>
        </div>
    </nav>
</header>


<div class="container">
    <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block">
            <h1> Set the salary </h1>
          
        </div>

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
            <form action="#" @submit.prevent="handleSubmit">
                <div class="row">

                    <!-- First Name
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md">
                    </div>

                    Last Name
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md">
                    </div>

                    Email Address -->
                
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i></i>
                            </span>
                        </div>
                        <input id="eid" type="text" name="eid" v-model="id" placeholder="Employee ID" class="form-control bg-white border-left-0 border-md">
                    </div>



                          <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i></i>
                            </span>
                        </div>
                        <input id="basic" type="text" name="eid" v-model="basic" placeholder="Basic Salary" class="form-control bg-white border-left-0 border-md">
                    </div>
                  


                              <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i></i>
                            </span>
                        </div>
                        <input id="rent" type="text" name="eid" v-model="rent" placeholder="House Rent" class="form-control bg-white border-left-0 border-md">
                    </div>
                  


                        <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i></i>
                            </span>
                        </div>
                        <input id="medical" type="text" name="eid" v-model="medical" placeholder="Medical Allowance" class="form-control bg-white border-left-0 border-md">
                    </div>


                        <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i></i>
                            </span>
                        </div>
                        <input id="tax" type="text" name="eid" v-model="tax" placeholder="Tax Money" class="form-control bg-white border-left-0 border-md">
                    </div>
                  
                  

                    <!-- Phone Number -->

                    <!--
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-phone-square text-muted"></i>
                            </span>
                        </div>
                        <select id="countryCode" name="countryCode" style="max-width: 80px" class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                            <option value="">+12</option>
                            <option value="">+10</option>
                            <option value="">+15</option>
                            <option value="">+18</option>
                        </select>
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3">
                    </div>.
                -->


                    <!-- 
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-black-tie text-muted"></i>
                            </span>
                        </div>
                        <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose your job</option>
                            <option value="">Designer</option>
                            <option value="">Developer</option>
                            <option value="">Manager</option>
                            <option value="">Accountant</option>
                        </select>
                    </div>

                   =
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md">
                    </div>

              

                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md">
                    </div>

                    -->




                    <!-- Submit Button 
                    <div class="form-group col-lg-12 mx-auto mb-0">
                        
                            <span class="font-weight-bold"> Submit </span>
                        
                    </div>

                        -->

                        
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Save
						</button>
					</div>


                    <!-- Divider Text 
                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>
                    -->

                  

                    <!-- Already Registered
                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold"> Already Registered? <a href="#" class="text-primary ml-2">Login</a></p>
                    </div>
                     -->

                </div>
            </form>
        </div>
    </div>
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
                basic:'',
                rent:'',
                medical:'',
                tax:''
            }
        },

        methods:{
            
            async handleSubmit(){
              console.log("ererwr");
                  await axios.post('/salaryinsert.php', {
                   id: this.id,
                    basic:this.basic,
                    rent : this.rent,
                   medical: this.medical,
                   tax : this.tax
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
    background: #405D9D;
    border: none;
}

.btn-facebook:hover, .btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42AEEC;
    border: none;
}

.btn-twitter:hover, .btn-twitter:focus {
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
    color: rgb(9, 8, 8);
    font-weight: bold;
    font-size: 0.9rem;
}
.form-control:focus {
    box-shadow: none;
}


</style>