<template>


<nav class="navbar navbar-dark bg-dark navbar-expand fixed-top ">
        <div class="container">
              
                <router-link to="/" class="navbar-brand"> Home </router-link>
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                      <router-link to="/profile" class="nav-link"> Profile </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link to="/file" class="nav-link"> Application </router-link>
                    </li>

                     <li class="nav-item">
                      <router-link to="/emplist" class="nav-link"> Employee List </router-link>
                    </li>

                    
                     <li class="nav-item">
                      <router-link to="/download" class="nav-link">Download </router-link>
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
