<template>
  <Navbar />

  <div class="Box pb-5">
    <div class="px-5">
      <h1>เพิ่มข้อความตอบกลับประโยคสุดท้าย</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="box p-4">
      <h2>เพิ่มข้อความตอบกลับประโยคสุดท้าย</h2>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >หมายเลขเอกสาร</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="id docs"
          v-model="data.iddocs"
        />
      </div>
      
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >เพิ่มข้อความตอบกลับ</label
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
          @click="submit(data.iddocs, data.Text)"
        >
          ตกลง
        </button>
        <button type="button" class="btn btn-danger"  @click="
          $router.push(
            `/chatclose`
          )
        ">
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Breadcrumb from "../../components/Bcinsert/bc-insertchatclose.vue";
export default {
  components: { Navbar, Breadcrumb  },
  data() {
    return {
      iddocs: "",
      Text: "",
      data: [],
    };
  },
  methods: {
    submit(iddocs, Text) {
      if (iddocs == null || Text == null ) {
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      } else if (iddocs != null || Text != null) {
      axios
        .post(process.env.VUE_APP_BACKEND_BASE_URL+"/insertchatclose/" + iddocs + "/" + Text)
        .then((response) => {
          this.data = response.data;
          this.$router.push("/chatclose");
          // console.log(response.data)
        });
      }
    },
    reset() {
      this.data.iddocs = "";
      this.data.Text = "";
    },
  },
};
</script>
  
  <style  scoped>
.Box {
  background-color: #ffff;
  height: 50rem;
}
h1 {
  padding-top: 40px;
  padding-bottom: 10px;
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
  background-color: #fff8e1;
  height: 80rem;
}
.box {
    width: 90%;
  }
}
@media screen and (max-width: 767px) {
  .Box {
  background-color: #fff8e1;
  height: 55rem;
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
</style>>
  