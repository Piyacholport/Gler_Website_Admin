<template>
    <div>
        <div class="row">
            <div class="col-6 bg-color">

                <h3 class="text-center mb-3 mt-3 haed">ความคิดเห็นเพิ่มเติม</h3>

                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight">
                        <div class="sortby-input mt-2">
                            <p class="p-sortby fw-bold mb-2">Type:</p>
                        </div>
                        <div class="input-group mb-3 sort-frist">
                            <select class="form-select" aria-label="Default select example" v-model="first"
                                @click="getsortReviews()">
                                <option value="desc">ล่าสุด-ลำดับแรก</option>
                                <option value="asc">ลำดับแรก-ล่าสุด</option>
                            </select>
                        </div>
                    </div>
                    <!-- สลับตำแหน่ง -->
                    <div class="p-2 bd-highlight">
                        <div class="sortby-input mt-2">
                            <p class="p-sortby fw-bold mb-2">Sort By:</p>
                        </div>
                        <div class="input-group mb-3 d-flex justify-content-start input-sort">
                            <select class="form-select" aria-label="Default select example" v-model="sortBy"
                                @click="getsortReviews()">
                                <option value="date">วันที่</option>
                                <option value="comment">คอมเมนต์</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="p-2 mt-2 scroll mb-3">
                    <div class="box-item d-flex" v-for="(item, index) in loaddata" :key="index">

                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/profile-user.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>{{ item.comment }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            loaddata: "",
            comment: "",
            date: "",
            sortBy: "date",
            first: "desc",
        };
    },
    mounted() {
        this.getsortReviews();
    },
    methods: {
        getsortReviews() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/sortReviews", { params: { sortBy: this.sortBy, first: this.first } }).then((response) => {
                this.loaddata = response.data;
                // console.log(response);
            });
        },
    }
}
</script>

<style scoped>
.bg-color {
    background-color: #FFEDD1;
    border-radius: 40px;
    width: 90%;
    margin: auto;
}

/* .scroll{
    scroll-behavior: smooth !important; 
} */

.box {
    background-color: #ffff;
    width: 100%;
    margin: auto;
    border-radius: 40px;

}

.box-item {
    margin-bottom: 5px;
}

.icon {
    width: 30px;
}

.emoji-level {
    display: flex;
    justify-content: start;
    align-items: center;
}

.bg-level {
    text-align: right;
    margin: auto;
    display: flex;
    justify-content: start !important;
    align-items: center;
}

.text-level p {
    text-align: left;
    padding-right: 5px;
    font-family: 'Kanit', sans-serif;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
    .text-level p {
        width: 100px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
    .haed{
        font-size: 18px;
        font-weight: bold;
    }
}
</style>