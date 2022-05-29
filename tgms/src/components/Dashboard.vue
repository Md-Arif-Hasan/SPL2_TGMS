
<template>
<div>


<div class="contact-form">
       <Nav> </Nav>
</div>	<h1> Welcome to Admin </h1>

</div>

</template>


<script>
import Nav from './Nav.vue'
export default {
  name: 'Dashboard',
  components: {
    Nav
  }
}
</script>


<style scoped>
h1 {
  text-align: center;
    padding: 50px 50px 220px;
	line-height: 150px;
  height: 350px;
  background: #925b12;
}
</style>