<template>
  <head>
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  </head>
  <Navbar />

  <div class="container-fluid">
    <div class="px-5">
      <h1>แก้ไขโปรไฟล์ผู้ใช้</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    <div class="box">
      <div class="box-item">
        <div class="content">
          <div class="px-5 mt-0 mb-3">
            <h2>แก้ไขโปรไฟล์ผู้ใช้</h2>
          </div>


          <div class="img mb-3">
            <img :src="photoURL" alt="img-profile" class="photoURL mb-0" />
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="uid" v-model="uid" disabled />
            <label for="floatingInput">UID</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="uid" v-model="providerId" disabled />
            <label for="floatingInput">Provider</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email"
              disabled />
            <label for="floatingInput">อีเมล</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
              v-model="photoURL" />
            <span class="material-symbols-outlined"> edit </span>
            <label for="floatingInput">รูปภาพ</label>
          </div>

          <!-- <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="photoURL"
              />
              <label for="floatingInput">รูปภาพ</label>
            </div> -->

          <div class="form-floating mb-3">
            <input type="text" class="form-control icon" placeholder="dispassword" v-model="data.displayName" />
            <div class="invalid-feedback">Please choose a username.</div>
            <span class="material-symbols-outlined"> edit </span>
            <label for="floatingdisplayname">ชื่อผู้ใช้</label>
          </div>
          <div class="form-floating mb-3">
            <div class="form-floating">
              <input type="tel" id="typephone" name="phone" class="form-control" placeholder="0XXXXXXXXX"
                pattern="[0-9]{10}" v-model="data.phonenum" required />
              <!-- <input type="tel" class="form-control" id="floatingphonenum" placeholder="0xxxxxxxxx"
                v-model="data.phonenum" /> -->
              <span class="material-symbols-outlined"> edit </span>
              <label for="floatingphotoURL">เบอร์โทร</label>
            </div>
          </div>
          <div class="footer d-flex justify-content-end mt-4" id="content_center">
            <button type="button" class="btn btn-warning mx-2" @click="
              Addata(
                uid,
                providerId,
                email,
                data.displayName,
                data.phonenum
              ),
              UpdateUser()
            ">
              ตกลง
            </button>
            <button type="button" class="btn btn-danger" @click="$router.push(`/`)">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../../components/Navbar.vue";
import { getAuth, updateProfile } from "firebase/auth";
import Breadcrumb from "../../../components/BC-profile.vue";
import axios from "axios";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      uid: "",
      providerId: "",
      email: "",
      // displayName: "",
      // photoURL: "",
      phonenum: "",
      data: [],

      displayName: null,
      photoURL: null,
    };
  },
  mounted() {
    this.getAdminByID();
  },
  methods: {
    getAdminByID() {
      axios
        .get(
          process.env.VUE_APP_BACKEND_BASE_URL +
          `/AdminByID/${this.$route.params.id}`
        )
        .then((response) => {
          this.data = response.data;
          console.log(response.data);
        });
    },
    GetUser() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        console.log(user);
      }
    },

    UpdateUser() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user !== null) {
        updateProfile(auth.currentUser, {
          displayName: this.displayName,
          photoURL: this.photoURL,
        })
          .then(() => {
            console.log("อัปเดตสมบูรณ์");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    Addata(uid, providerId, email, displayName, phonenum) {
      if (
        this.displayName == null ||
        this.phonenum == null
      ) {
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      } else if (
        this.displayName != null ||
        this.phonenum != null
      ) {
        axios
          .post(
            process.env.VUE_APP_BACKEND_BASE_URL +
            "/insertadmindata/" +
            uid +
            "/" +
            providerId +
            "/" +
            email +
            "/" +
            displayName +
            "/" +
            phonenum
          )
          .then((response) => {
            this.data = response.data;
            this.$router.push("/");
            // console.log(response.data)
          });
      }
    },
  },
  created() {
    this.GetUser();
    this.UpdateUser();

    const auth = getAuth();
    const user = auth.currentUser;
    this.uid = user.uid;
    this.email = user.email;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.photoURL = user.photoURL;
    this.providerId = user.providerData[0].providerId;
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #ffff;
  height: auto;
}

h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}

.box {
  background: #ffffff;
  border-radius: 15px;
  width: 60%;
  margin: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
}

.box-item {
  width: 90%;
  padding: 20px;
  margin: auto;
}

.photoURL {
  width: 150px;
  height: 150px;
  border: 3px solid #ffbd59;
  border-radius: 50%;
}

.dispalyname {
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}

.email {
  font-size: 16px;
  text-align: center;
  color: gray;
}

.content {
  width: 100%;
}

.form-control {
  width: 90%;
  border: 2px solid #99ccff;
  border-radius: 15px;
  /* margin: auto; */
}

.form-floating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  width: 90%;
  border-radius: 15px;
}

.img {
  width: 80%;
  margin: auto;
  text-align: center;
}


/* .photoURL mb-3{
  width: 80%;
  margin: auto;
} */
.form-floating {
  width: 100%;
}

.footer {
  width: 80%;
}

#content_center {
  width: 90%;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .container-fluid {
    background-color: #fff8e1;
    height: 75rem;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  .box-item[data-v-2dc74e42] {
    width: 90%;
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin: auto;
  }
}

@media screen and (max-width: 767px) {
  .box {
    width: 100%;
  }
}
</style>