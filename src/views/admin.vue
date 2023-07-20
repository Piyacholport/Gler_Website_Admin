<template>
  <Navbar />
  <div class="Box">
    <div class="px-5">
      <h1>จัดการแอดมิน</h1>
      <hr />
    </div>
    <div class="mb-5 px-5">
      <Breadcrumb />
    </div>

    <div class="search">
      <div class="row row-menu">
        <div class="col-lg-9 search-res p-0">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search.." aria-describedby="button-addon2"
              v-model="search" />
          </div>
        </div>

      </div>
    </div>

    <div class="search mt-0">
      <div class="row row-menu sort">
        <div class="col-2 sortby p-0 mt-3">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Sort By:</p>
          </div>
          <div class="input-group mb-3 d-flex justify-content-start input-sort">
            <select class="form-select" aria-label="Default select example" v-model="sortBy" @click="getadmin()">
              <option value="displayName">ชื่อ</option>
              <option value="email">อีเมล</option>
              <option value="phonenum">เบอร์โทร</option>
             
            </select>
          </div>
        </div>
        <div class="col-2 sort px-0 mt-3">
          <div class="sortby-input mt-2">
            <p class="p-sortby fw-bold mb-2">Type:</p>
          </div>
          <div class="input-group mb-3 sort-frist">
            <select class="form-select" aria-label="Default select example" v-model="first" @click="getadmin()">
              <option value="desc">ล่าสุด-ลำดับแรก</option>
              <option value="asc">ลำดับแรก-ล่าสุด</option>
            </select>
          </div>
        </div>
        <div class="div_add_admin" >
          <button class="btn btn-success add " id="btn_del"  data-bs-toggle="modal"
            data-bs-target="#exampleModal">เพิ่มแอดมิน</button>
        </div>
        
        <div class="admin_list">
          <div class="grid" style="text-align: center;" id="thead">
            <div class="g-col-6 g-col-md-4">ชื่อ</div>
            <div class="g-col-6 g-col-md-4">อีเมล</div>
            <div class="g-col-6 g-col-md-4">เบอร์โทร</div>
            <div class="g-col-6 g-col-md-4">
              จัดการ
            </div>

          </div>
          <div class="item" v-for="item in filtersearch" :key="item">
            <div class="grid" id="tbody">
              <div class="g-col-6 g-col-md-4" style="text-align: left;">{{ item.displayName }}</div>
              <div class="g-col-6 g-col-md-4" style="text-align: left;">{{ item.email }}</div>
              <div class="g-col-6 g-col-md-4" style="text-align: center;">{{ item.phonenum }}</div>
              <div class="g-col-6 g-col-md-4" style="text-align: center;"> <button class="btn btn-danger delete delete-res" id="btn_del"   data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="confirmdelete(item.id)"
          >ลบ</button></div>
   

            </div>
          </div>
        </div>
      </div>

    </div>


  </div>



   <!-- Modal deleteuser-->
   <div
        class="modal fade"
        id="staticBackdrop"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content border  border-5">
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close float-end"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center fs-4 fw-bold">
              คุณต้องการลบแอดมินนี้หรือไม่ ?
            </div>
            <div class="modal-footer border-0 mt-3">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-dismiss="modal"
                  @click="deleteuser(id)"
                >
                  ยืนยัน
                </button>
              </div>
              <div class="col">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                ยกเลิก
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>


<!-- Modal email-->
<div
      class="modal fade modaladd"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content border border-warning border-5">
          <div class="modal-header border-0 px-2 pt-0 pb-0 mt-2">
            <button
              type="button"
              class="btn-close float-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center fs-4 fw-bold px-0">เพิ่มอีเมล</div>

          <input
            type="email"
            class="form-control input-email"
            placeholder="Email address"
            v-model="email"
          />
          <div class="modal-footer border-0">
            <div class="row">
              <div class="col-6 confirm-1">
                <button
                  type="button"
                  class="btn btn-warning confirm"
                  data-bs-dismiss="modal"
                  @click="sendEmail()"
                >
                  ยืนยัน
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-secondary cancel"
                  data-bs-dismiss="modal"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



</template>

<script>
import Navbar from "../components/Navbar.vue";
import Breadcrumb from "../components/BC-admin.vue";
import axios from "axios";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  url: "http://localhost:8080/login",
  handleCodeInApp: true,
};

export default {
  components: { Navbar, Breadcrumb },
  // watch: {
  //   search() {
  //     this.getchatopen();
  //   }
  // },
  data() {
    return {
      id: "",
      email: "",
      displayName: "",
      phonenum: "",

      loaddata: [],
      search: "",

      sortBy: "displayName",
      first: "desc",
    };
  },
  mounted() {
    this.getadmin();
  },
  methods: {
    getadmin() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/Admin", { params: { sortBy: this.sortBy, first: this.first } }).then((response) => {
        this.loaddata = response.data;
        console.log(response);
      });
    },

    sendEmail() {
      const email = this.email;
      const auth = getAuth();

      if (email == null) {
        alert("กรุณากรอกอีเมล!!");
      } else if (email != null) {

        sendSignInLinkToEmail(auth, email, actionCodeSettings)
          .then(() => {
            console.log(email);
            localStorage.setItem("emailForSignIn", email);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    confirmdelete(id) {
      this.id = id;
    },
    deleteuser(id) {
      axios.delete(process.env.VUE_APP_BACKEND_BASE_URL + "/deleteuser/" + id).then(() => {
        this.id = id;
        this.getadmin();
        // console.log(response.data)
      });
    },

  },
  computed: {
    filtersearch() {
      return this.loaddata.filter((loaddata) => {
        return loaddata.displayName.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.sendEmail();
  },
};
</script>

<style scoped>
.Box {
  background-color: #fff;
  height: 50rem;
}

h1 {
  padding-top: 40px;
  padding-bottom: 10px;
}

.input-group {
  width: 48%;
}

.form-select {
  border: 4px solid #ffbd59;
  border-radius: 15px;
}

.input-group {
  width: 48%;

}

.input-sort {
  width: 90% !important;
  padding-bottom: 20px;
}

.sortby {
  width: 20%;
}

.p-sortby {
  font-size: 16px;
}

.sort-frist {
  width: 100% !important;
  padding-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 14px;
  row-gap: 20px;
}

.content {
  color: #242424;
  background-color: #ffffff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
}

.row-menu {
  width: 90%;
  margin: auto;
}

.bnt-insert {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-bottom: 30px;
}

.form-control {
  border: 4px solid #ffbd59;
  border-radius: 15px;
}

.insert {
  width: 40%;
}


.displayname {
  margin-top: 10px;
  color: #ffbd59;
  font-size: 22px;
  font-weight: bold;
}

.email {
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: #c2c2c2;
}

.phone {
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: #c2c2c2;
  margin-top: -10px;
}

.col-flex {
  justify-content: end;
}

.delete {
  width: 80%;
}

.input-email {
  width: 80%;
  margin: auto;
}



.confirm-1 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.confirm {
  width: 100% !important;
}

.cancel {
  width: 100% !important;
}

#thead {
  padding: 0.9rem 0.9rem;

  background-color: #ffbd59;
  font-weight: bold;
  border-radius: 8px;
  border: 0.5px solid #e9e9e9;
}

#tbody {
  padding: 0.7rem 0.7rem;
  background-color: #fff;
  margin-top: 1%;
  border-radius: 8px;
  border: 0.5px solid #e9e9e9;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.13);

}

.div_add_admin{
  text-align: right;
  margin-bottom: 1%;
}

#btn_del {
  border-radius: 4px;
  width: 120px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .Box {
    background-color: #fff;
    height: 80rem;
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
    width: 70%;
    margin: auto;
  }

  .col-flex {
    text-align: end;
  }

  #insertbtn {
    width: 50%;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 767px) {

  .Box {
    background-color: #fff;
    /* background-color: #fff8e1; */
    height: auto;
  }

  .search-res {
    padding: 0px;
    display: contents !important;
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
    background-color: #ffffff;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.11);
  }

  .col-flex {
    text-align: end;
  }

  #insertbtn {
    width: 50%;
  }
  .modaladd{
    width:100%;
  align-items: center;
  }
}
</style>