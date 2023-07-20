<template>
  <div class="container-fluid p-0">
    <div class="box pt-5">
      <form @submit.prevent="forgotPassword" class="p-5">
        <div class="detail">
          <h3>เปลี่ยนรหัสผ่าน</h3>
          <p class="mt-2">กรุณากรอกอีเมลรับลิงก์รหัสผ่าน</p>
        </div>
        <div class="mb-3 p-0 text-start">
          <input type="email" class="form-control" placeholder="อีเมล" v-model="user.email" />
        </div>
        <div class="row mb-5">
          <button type="submit" class="btn btn-warning">ตกลง</button>
        </div>
        <div class="register">
          <p>คุณยังไม่สมัครใช้งาน? <a href="/register">สมัครใช้งาน</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

firebase;

const auth = getAuth();

export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgotPassword(email) {

      if (email == null) {
        alert("อีเมลไม่ถูกต้อง!!");
      } else if (email != null) {

        sendPasswordResetEmail(auth, this.user.email)
        .then(() => {
        alert("check your emailbox");
        this.user = {
          email: "",
        };
      })
      .catch((error) => {
        console.log(error.message);
      })
      
  }
}
    
    },
  // },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap");

.container-fluid {
  background-color: #ffff;
  height: 50rem;
}

h3 {
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
  color: #000066;
}

p {
  color: gray;
  font-family: "Prompt", sans-serif;
  margin-bottom: 30px;
}

form {
  width: 40%;
  background-color: #fff8e1;
  margin: auto;
  border-radius: 8px;
  height: 350px;
}

.row {
  width: 90%;
}

.mb-3 {
  width: 90%;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .container-fluid {
    background-color: #ffefd5;
    height: 80rem;
  }

  form {
    width: 80%;
    height: 400px;
  }
}

@media screen and (max-width: 767px) {
  form {
    width: 90%;
    height: 350px;
  }
}</style>
