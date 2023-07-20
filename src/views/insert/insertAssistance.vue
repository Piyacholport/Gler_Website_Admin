<template>
  <Navbar />

  <div class="Box">
    <div class="px-5">
      <h1>เพิ่มแหล่งช่วยเหลือ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>


    <div class="box p-4">
      <h2>เพิ่มแหล่งช่วยเหลือ</h2>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">หมายเลขเอกสาร</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="id docs"
              v-model="data.iddocs" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">ชื่อแหล่งช่วยเหลือ</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="เพิ่มชื่อแหล่งช่วยเหลือ"
              v-model="data.title" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์แหล่งช่วยเหลือ</label>
            <input type="url" class="form-control" id="exampleFormControlInput2"
              placeholder="เพิ่มเบอร์โทรศัพท์แหล่งช่วยเหลือ" v-model="data.tel" />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Facebook แหล่งช่วยเหลือ</label>
            <input type="text" class="form-control" id="exampleFormControlInput2"
              placeholder="Facebook Page แหล่งช่วยเหลือ" v-model="data.facebook" />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Link Facebook แหล่งช่วยเหลือ</label>
            <input type="url" class="form-control" id="exampleFormControlInput2"
              placeholder="Link Facebook แหล่งช่วยเหลือ" v-model="data.Linkfacebook" />
          </div>
        </div>

        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">LineID แหล่งช่วยเหลือ</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Line ID แหล่งช่วยเหลือ"
              v-model="data.lineid" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Link Line แหล่งช่วยเหลือ</label>
            <input type="url" class="form-control" id="exampleFormControlInput2" placeholder="Link Line แหล่งช่วยเหลือ"
              v-model="data.Linkline" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">ข้อมูลเพิ่มเติม</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="ข้อมูลเพิ่มเติม"
              v-model="data.description"></textarea>
          </div>

        </div>
      </div>
      <div class="footer d-flex justify-content-end mt-4">
        <button type="button" class="btn btn-warning mx-2"
          @click="submit(data.iddocs, data.title, data.tel, data.facebook, data.Linkfacebook, data.lineid, data.Linkline, data.description)">
          ตกลง
        </button>
        <button type="button" class="btn btn-danger" @click="
          $router.push(
            `/assistance`
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
import Breadcrumb from "../../components/Bcinsert/bc-insertassistance.vue";
export default {
  components: { Navbar, Breadcrumb },
  data() {
    return {
      iddocs: "",
      title: "",
      tel: "",
      Linkfacebook: "",
      facebook: "",
      lineid: "",
      Linkline: "",
      description: "",
      data: [],
    };
  },
  methods: {
    submit(iddocs, title, tel, facebook, Linkfacebook, lineid, Linkline, description) {
      // if (iddocs == null || title == null || tel == null|| facebook == null|| urlfacebook == null || lineID == null|| urllineID == null || description == null) {
      //   alert("กรุณากรอกข้อมูลทุกช่อง!!");
      // } else if (iddocs != null || title != null || tel != null|| facebook != null|| urlfacebook != null || lineID != null|| urllineID != null || description != null) {

      axios
        .post(process.env.VUE_APP_BACKEND_BASE_URL + "/insertassistance", {
          iddocs: iddocs,
          title: title,
          tel: tel,
          facebook: facebook,
          Linkfacebook: Linkfacebook,
          lineid: lineid,
          Linkline: Linkline,
          description: description,
        })
        .then((response) => {
          this.data = response.data;
          console.log(response)
          this.$router.push("/assistance");
          // console.log(response.data)
        });
    }
    // }
  },
  // reset() {
  //   this.data.iddocs = "";
  //   this.data.title = "";
  //   this.data.tel = "";
  //   this.data.facebook = "";
  //   this.data.lineID = "";
  //   this.data.description = "";
  // },
  // },
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
  