<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>ภาพรวมระบบ</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="row px-5">
      <div class="grid">
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/user-profile.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">{{ password }}</p>
                <p class="name pt-2 fs-6">เข้าใช้ด้วยอีเมลและรหัสผ่าน</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">

            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/google.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">{{ google }}</p>
                <p class="name pt-2 fs-6">เข้าใช้ด้วยบัญชี Google</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/users.png" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">{{ maxloaddata }}</p>
                <p class="name pt-2 fs-6">ผู้ดูแลระบบทั้งหมด</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="row align-items-center">
              <div class="col">
                <div class="bg-icon">
                  <img src="../assets/dashboard/Gler_Profile.jpg" alt="icon" />
                </div>
              </div>
              <div class="col">
                <p class="num mt-3">{{ userlength }}</p>
                <p class="name pt-2 fs-6">เพื่อนในไลน์ทั้งหมด</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row align-items-start px-5" id="div-desktop">

      <div class="col-5 mt-4">
        <div class="chart">
          <chartemotion />
        </div>
        <div class="chart p-3 mt-4 ">
          <charttotal />
        </div>
      </div>

      <div class="col-4 mt-4">
        <div class="row align-items-start">
          <div class="col-">
            <div class="chart">
              <chartchat />
            </div>
          </div>
      
        </div>

        <div class="chart mt-4">
          <queryText />
        </div>
      </div>


      <div class="col-3 mt-4">
        <div class="">
          <chartreview />
        </div>
      </div>
    </div>

    <!-- responsive -->

    <div class="row align-items-start px-5" id="div-mobile">

      <div class="col mt-4 ">
        <div class="chart" id="total">
          <chartemotion />
        </div>
        <div class="chart p-0 mt-4 " id="total">
          <charttotal />
        </div>
      </div>

      <div class="col mt-4">
        <div class="row align-items-start">
          <div class="col">
            <div class="chart">
              <chartchat />
            </div>
          </div>

        </div>

        <div class="chart mt-4">
          <queryText />
        </div>
      </div>


      <div class="col mt-4">
        <div class="">
          <chartreview />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import chartemotion from "../components/chart/emotion.vue";
import charttotal from "../components/chart/total.vue";
import chartchat from "../components/chart/chat.vue";
import chartreview from "../components/chart/review.vue";
import queryText from "../components/chart/queryText.vue";
import Breadcrumb from "../components/BC-dashboard.vue";
import axios from "axios";

export default {
  components: { Navbar, Breadcrumb, chartemotion, charttotal, chartchat, queryText, chartreview },
  data() {
    return {
      loaddata: [],
      chatpositive: '',
      maxloaddata: "",
      password: '',
      google: '',
      userlength: '',
      comfortable: "",  // สบายใจมาก
      relaxed: "",  // สบายใจ
      normal: "",  // เฉยๆ
      worried: "",  // ไม่สบายใจ
      uncomfortable: "",  // ไม่สบายใจมาก
      level: "",

      sortBy: "displayName",
      first: "desc",
    };
  },

  methods: {
    getadmin() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/Admin", { params: { sortBy: this.sortBy, first: this.first } }).then((response) => {
        this.maxloaddata = response.data.length;
        // console.log('จำนวนแอดมินทั้งหมด'+ this.password);
        // console.log(response.data);
        this.password = response.data.filter((item) => item.providerId == 'password').length;
        this.google = response.data.filter((item) => item.providerId == "google.com").length;

      });
    },
    getuserline() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/getusers").then((response) => {
        this.userlength = response.data.length;
        // const userEmotion = response.data.filter((item)=>item.id).collection('emotions').length
        // console.log(userEmotion);
      });
    },
    // getlevel() {
    //   axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/getlevel").then((response) => {
    //     this.level = response.data.length;
    //     console.log("การประเมินอารมณ์ทั้งหมด : "+response.data.length);

    //     this.uncomfortable = response.data.filter((item)=>item.level == '1').length;
    //     this.worried = response.data.filter((item)=>item.level == '2').length;
    //     this.normal = response.data.filter((item)=>item.level == '3').length;
    //     this.relaxed = response.data.filter((item)=>item.level == '4').length;
    //     this.comfortable = response.data.filter((item)=>item.level == '5').length;
    //     console.log("ไม่สบายใจมาก : "+this.uncomfortable);
    //     console.log("ไม่สบายใจ : "+this.worried);
    //     console.log("เฉยๆ : "+this.normal);
    //     console.log("สบายใจ : "+this.relaxed);
    //     console.log("สบายใจมาก :"+this.comfortable);

    //   });
    // },

    // getchatpositive() {
    //   axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/queryChatPositive").then((response) => {
    //     this.chatpositive = response.data.length;
    //     this.chatpositive = response.data;
    //     console.log("ข้อความตอบกลับบวก : "+response.data.length); 
    //   });
    // }


  },
  mounted() {
    this.getadmin();
    this.getuserline();
    // this.getlevel();
    // this.getchatpositive();
  }
};
</script>

<style scoped>
.Box {
  background-color: #F9F5EF;
  height: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 5px;
  row-gap: 20px;
}

.content {
  color: #242424;
  background-color: #ffbd59;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.bg-icon {
  margin: auto;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  padding: 20px;
  width: 90px;
}

.num {
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
}

.name {
  font-size: 14px;
  font-weight: bold;
  color: #f5f5f5;
}

.pie {
  padding-left: 0px;
}

.chart-pie {
  background-color: #ffff;
  border-radius: 8px;
}

.chart {
  background-color: white;
  border-radius: 12px;
  height: auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.imformation {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);
}

.dash-2 {
  background-color: #ffff;
  border-radius: 8px;
  height: 100%;
}

.line-chart {
  width: 80%;
  height: auto;
  margin: auto;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  .Box {
    background-color: #fff8e1;
    height: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 13px;
    row-gap: 20px;
  }

  .content {
    color: #242424;
    background-color: #ffbd59;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }

  .bg-icon {
    margin: auto;
    width: 70px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    padding: 20px;
    width: 80px;
  }

  .imformation {
    margin-top: 10px;
    height: 200px;
  }



  #div-desktop {
    display: none !important;
  }

}
@media screen and (min-width: 700px) and (max-width: 2000px) {
  #div-mobile {
    display: none !important;
  }

}
</style>