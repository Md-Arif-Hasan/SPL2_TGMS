<template>
  <div>
    <nav-2></nav-2>
    <div class="login-box">
      <h2>Loan Set</h2>
      <form @submit.prevent="handleSubmit">
        <div class="user-box">
          <input
            type="text"
            name="employeeid"
            required=""
            v-model="id"
            placeholder="Employee ID"
          />
          <label>Employee ID</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            name="name"
            required=""
            v-model="name"
            placeholder="Name"
          />
          <label>Name</label>
        </div>

        <div class="user-box">
          <input
            type="text"
            name="mobile"
            required=""
            v-model="mobile"
            placeholder="Mobile Number"
          />
          <label>Mobile Number</label>
        </div>

        <div class="user-box">
          <input
            type="text"
            name="money"
            required=""
            v-model="amount"
            placeholder="Loan Amount"
          />
          <label>Loan Amount</label>
        </div>

        <div class="container-login100-form-btn">
          <button type="submit" class="login100-form-btn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav2 from "./Nav2.vue";
export default {
  name: "LoanSet",
  components: {
    Nav2,
  },
  data() {
    return {
      id: "",
      name: "",
      mobile: "",
      amount: "",
    };
  },

  methods: {
    async handleSubmit() {
      console.log("ererwr");
      const response = await axios.post("/fileapproval.php", {
        id: this.id,
        name: this.name,
        mobile: this.mobile,
        amount: this.amount,
      });

      if (response.data[0].status == 1) {
        this.$router.push("/download");
        console.log("Loan Set Succesfull");
      } else {
        alert("Failed! ");
      }
    },
  },
};
</script>

<style scoped>
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
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
  color: #161817;
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
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  pointer-events: none;
  transition: 0.5s;
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
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #103537;
  color: rgb(7, 7, 7);
  border-radius: 5px;
  box-shadow: 0 0 5px #196b50, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
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
  50%,
  100% {
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
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
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
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
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
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
