<template>


<nav class="navbar navbar-dark bg-dark navbar-expand fixed-top ">
        <div class="container">
              
                <router-link to="/" class="navbar-brand"> Home </router-link>
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                      <router-link to="/login" class="nav-link"> Login </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/register" class="nav-link"> Register </router-link>
                    </li>

                     <li class="nav-item">
                      <router-link to="/profile" class="nav-link"> Profile </router-link>
                    </li>

                     <li class="nav-item">
                      <router-link to="/attend" class="nav-link"> Attendence  </router-link>
                    </li>

                    
                     <li class="nav-item">
                      <router-link to="/payslip" class="nav-link"> Payslip  </router-link>
                    </li>

                     <li class="nav-item">
                      <router-link to="/emplist" class="nav-link"> Employee List  </router-link>
                    </li>

                      <li class="nav-item">
                      <router-link to="/files" class="nav-link"> File UP </router-link>
                    </li>


                  </ul>
                </div>
            </div>
</nav>
    <!-- <nav class="navbar navbar-expand navbar-dark fixed-top">
      
    </nav > -->
</template>

<script>
export default{

}

</script>
