<template>
  <Navbar />

  <div class="Box pb-5">
    <div class="px-5">
      <h1>แก้ไขข้อความตอบกลับประโยคกระตุ้น</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    <div class="box p-4">
      <h2>แก้ไขข้อความตอบกลับประโยคกระตุ้น</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >หมายเลขเอกสาร</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="id docs"
          v-model="data.iddocs" disabled
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >แก้ไขข้อความตอบกลับ</label
        >
        <textarea
          class="form-control"
          id="validationDefault"
          for="validationDefault"
          placeholder="เพิ่มข้อความ"
          rows="7"
          v-model="data.Text"
          required
        ></textarea>
      </div>
      <div class="footer d-flex justify-content-end mt-4">
        <button
          type="button"
          class="btn btn-warning mx-2"
          @click="updateChatopen(data.Text)"
        >
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="
          $router.push(
            `/chatstimulate`
          )">
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";
import Breadcrumb from "../../../components/bcupdate/bc-updatechatstimulate.vue";

export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      Text: '',
      data: [],
      // id: null,
      id: '', //this is the id from the browser
    };
  },
  mounted() {
    this.getChatByID();
  },
  methods: {
    getChatByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL+`/chatstimulateByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
        });
    },
    updateChatopen(Text) {
      if (Text == "" || Text == null) {
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      } else if (Text != "") {
      axios
        .patch(
          process.env.VUE_APP_BACKEND_BASE_URL+`/updatechatStimulate/${this.$route.params.id}/${this.data?.Text}`
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/chatstimulate");
        });
      }
    },
    reset() {
      this.data.Text = "";
    },
  },
};
</script>
    
  <style  scoped>
.Box {
  background-color: #ffff !important;
  height: auto;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}

.Box {
  background-color: #f5f5f5;
  height: 750px;
}
h2 {
  text-align: center;
  padding-bottom: 20px;
}
.box {
  background-color: #f5e5c1;
  width: 50%;
  margin: auto;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #ffff;
    height: 80rem;
  }
  .box {
    width: 90%;
  }
}
@media screen and (max-width: 767px) {
  .Box {
    background-color: #ffff;
    height: 80rem;
  }
  .box {
    width: 80%;
  }
  .footer {
    display: flex;
    justify-content: center !important;
    align-items: center;
  }
  .btn-1 {
    margin-left: 0px !important;
  }
}
</style>