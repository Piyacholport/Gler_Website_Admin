<template>
  <Navbar />

  <div class="Box pb-5">
    <div class="px-5">
      <h1>แก้ไขกิจกรรมที่ชอบ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>
    <div class="box p-4">
      <h2>แก้ไขกิจกรรมที่ชอบ</h2>

      <div class="mb-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">หมายเลขเอกสาร</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="id docs"
            v-model="data.iddocs" disabled />
        </div>
        <label for="exampleFormControlInput1" class="form-label">ชื่อกิจกรรม</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
          v-model="data.title" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">ข้อมูลเพิ่มเติม</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="ข้อมูลเพิ่มเติม"
          v-model="data.description"></textarea>
      </div>
      <div class="footer d-flex justify-content-end mt-4">
        <button type="button" class="btn btn-warning mx-2" @click="updateActivity(data.title, data.description)">
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="
          $router.push(
            `/activity`
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
import Breadcrumb from "../../../components/bcupdate/bc-updateactivity.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      Text: null,
      data: {},
      title: "",
      description: "",
      id: ""
    };
  },
  mounted() {
    this.getAcitityByID();
  },
  methods: {
    getAcitityByID() {
      axios
        .get(process.env.VUE_APP_BACKEND_BASE_URL + `/ActivityByID/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data;
        });
    },
    updateActivity(title, description) {
      if (title == "" || title == null || description == "" || description == null) {
        alert("กรุณากรอกข้อมูลทุกช่อง!!");
      } else if (title != "" || description != "") {
      axios
        .patch(
          process.env.VUE_APP_BACKEND_BASE_URL + `/updateActivity/${this.$route.params.id}/${this.data?.title}/${this.data?.description}`
        )
        .then((response) => {
          this.data = response.data;
          this.$router.push("/activity");
        });
    }
  },
  reset() {
    this.data.title = "";
    this.data.description = "";

  },
}
};
</script>
    
<style  scoped>
.Box {
  background-color: #ffff;
  height: auto;
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

@media screen and (max-width: 767px) {
  .box {
    width: 90%;
  }
}
</style>