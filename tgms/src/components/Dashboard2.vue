
<template>
  <div>
    <div class="contact-form">
      <Nav2> </Nav2><br />
      <h1>Welcome to Employee</h1>
    </div>
  </div>
</template>


<script>
import Nav2 from "./Nav2.vue";
export default {
  name: "Dashboard",
  components: {
    Nav2,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 50px 50px 50px;
  line-height: 150px;
  height: 350px;
  background: #135472;
}
</style>