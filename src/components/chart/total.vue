<template>
    <head>

        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Prompt:wght@500&display=swap"
            rel="stylesheet">
    </head>
    <div>

        <div class="row ma-auto item " id="div-desktop">
            <div class="col-6">
                <div class="box-item d-flex justify-content-center mb-2">
                    <div class="col emoji">
                        <div class="bg-icon">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/happy.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ level }}
                        </div>
                        <div class="text">
                            <p>จำนวนการเลือกกิจกรรมที่ชอบ</p>
                        </div>
                    </div>
                </div>

                <div class="box-item d-flex mb-2">
                    <div class="col emoji">
                        <div class="bg-icon">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/volleyball.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ totalActivity }}
                        </div>
                        <div class="text">
                            <p>จำนวนความคิดเห็นเพิ่มเติม</p>
                        </div>
                    </div>
                </div>

                <div class="box-item d-flex">
                    <div class="col emoji">
                        <div class="bg-icon">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/messenger.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ totalReviews }}
                        </div>
                        <div class="text">
                            <p>จำนวนการประเมินอารมณ์</p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="col-6 bg-color ">
                <div class="p-2 mt-2">
                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/comfortable.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>สบายใจมาก : {{ comfortable }} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/relaxed.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>สบายใจ : {{ relaxed }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/normal.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>เฉยๆ : {{ normal }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/worried.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>ไม่สบายใจ : {{ worried }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/uncomfortable.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>ไม่สบายใจมาก : {{ uncomfortable }} </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- responsive -->
<!-- 
    <div class="row ma-auto item" id="div-mobile">
        <div class="row mb-3 p-0">
            <div class="col p-0">
                <div class="box-item d-flex justify-content-center mb-2">
                    <div class="col emoji">
                        <div class="bg-icon">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/happy.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ level }}
                        </div>
                        <div class="text">
                            <p>จำนวนการเลือกกิจกรรมที่ชอบ</p>
                        </div>
                    </div>
                </div>

                <div class="box-item d-flex mb-2">
                    <div class="col emoji">
                        <div class="bg-icon">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/volleyball.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ totalActivity }}
                        </div>
                        <div class="text">
                            <p>จำนวนความคิดเห็นเพิ่มเติม</p>
                        </div>
                    </div>
                </div>


                <div class="box-item d-flex ">
                    <div class="col emoji">
                        <div class="bg-icon ">
                            <div class="bg-icon">
                                <img src="../../assets/emotion/messenger.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="total">
                            {{ totalReviews }}
                        </div>
                        <div class="text">
                            <p>จำนวนการประเมินอารมณ์</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row p-0">
            <div class="col bg-color p-0 ">
                <div class="p-2 mt-2">
                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/comfortable.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>สบายใจมาก : {{ comfortable }} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/relaxed.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>สบายใจ : {{ relaxed }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/normal.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>เฉยๆ : {{ normal }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/worried.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>ไม่สบายใจ : {{ worried }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-item d-flex">
                        <div class="box d-flex">
                            <div class="col-3 emoji-level">
                                <div class="bg-level">
                                    <div class="bg-level">
                                        <img src="../../assets/emotion/uncomfortable.png" alt="icon" class="icon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col p-1">
                                <div class="text-level">
                                    <p>ไม่สบายใจมาก : {{ uncomfortable }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            level: "",
            totalActivity: "",
            totalReviews: "",
        };
    },
    async mounted() {
        this.getemotion();
        this.getTotalActivity();
        this.getTotalReviews();
    },
    methods: {
        getemotion() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/getlevel").then((response) => {
                this.level = response.data.length;
                console.log("การประเมินอารมณ์ทั้งหมด : " + response.data.length);

                this.uncomfortable = response.data.filter((item) => item.level == '1').length;
                this.worried = response.data.filter((item) => item.level == '2').length;
                this.normal = response.data.filter((item) => item.level == '3').length;
                this.relaxed = response.data.filter((item) => item.level == '4').length;
                this.comfortable = response.data.filter((item) => item.level == '5').length;
                // console.log("ไม่สบายใจมาก : " + this.uncomfortable);
                // console.log("ไม่สบายใจ : " + this.worried);
                // console.log("เฉยๆ : " + this.normal);
                // console.log("สบายใจ : " + this.relaxed);
                // console.log("สบายใจมาก :" + this.comfortable);
            }
            )
        },
        getTotalActivity() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryAtivity").then((response) => {
                this.totalActivity = response.data.length;
                // console.log("เลือกกิจกรรมทั้งหมด : " + response.data.length);
            }
            )
        },
        getTotalReviews() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryReviews").then((response) => {
                this.totalReviews = response.data.length;
                // console.log("ความคิดเห็นทั้งหมด : " + response.data.length);
            }
            )
        },
    }
}
</script>

<style scoped>
.box-item {
    background-color: #F9F5EF;
}

.bg-icon {
    text-align: right;
    margin: auto;
    background-color: #ffffff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 40px;
}

.emoji {
    display: flex;
    justify-content: center;
    align-items: center;
}

.total {
    font-weight: bold;
    font-size: 1.7rem;
    text-align: right;
    padding-right: 20px;
    font-family: 'Kanit', sans-serif;
}

.text {
    text-align: right;
    padding-right: 20px;
    font-family: 'Kanit', sans-serif;
}

.bg-color {
    background-color: #F9F5EF;

}

.box {
    background-color: #ffff;
    width: 100%;
    margin: 5px;
    border-radius: 40px;
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
}

@media screen and (min-width: 0px) and (max-width: 700px) {
    #div-mobile {
        display: block !important;
    }

    #div-desktop {
        display: none !important;
    }
    img {
    width: 20px;
}
.bg-icon {
    width: 50px;
    height: 50px;
}
.total {
    font-size: 20px;
}
.text p{
    font-size: 12px !important;
}
.box-item {
    width: 90%;
    margin: auto;
}
.icon {
    width: 25px;
}
}</style>