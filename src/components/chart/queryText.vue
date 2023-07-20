<template>
    <div>
        <canvas ref="chart" width="600" height="470"></canvas>
    </div>
</template>
  
<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            chartData: null,
            chart: null,
            chatpositive: "",
            chatnegative: "",
            chatopen: "",
            chatstimulate: "",
            chatclose: "",

        };
    },
    async mounted() {
        this.getchatpositive();
        this.getchatnegative();
        this.getchatopen();
        this.getchatstimulate();
        this.getchatclose();

        const response = await axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatPositive");
        this.chartData = response.data;
        // console.log(response.data)
        this.renderChart();
    },
    methods: {

        getchatpositive() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatPositive").then((response) => {
                this.chatpositive = response.data.length;
                console.log("ข้อความตอบกลับบวก : " + response.data.length);
            });
        },

        getchatnegative() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatNegative").then((response) => {
                this.chatnegative = response.data.length;
                console.log("ข้อความตอบกลับลบ : " + response.data.length);
            });
        },
        getchatopen() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatOpen").then((response) => {
                this.chatopen = response.data.length;
                console.log("ข้อความตอบกลับประโยคเปิด : " + response.data.length);
            });
        },
        getchatstimulate() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatStimulate").then((response) => {
                this.chatstimulate = response.data.length;
                console.log("ข้อความตอบกลับประโยคระตุ้น : " + response.data.length);
            });
        },
        getchatclose() {
            axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/queryChatClose").then((response) => {
                this.chatclose = response.data.length;
                console.log("ข้อความตอบกลับประโยคปิด : " + response.data.length);
            });
        },
        renderChart() {
            const ctx = this.$refs.chart.getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["ประโยคเปิด", "ประโยคด้านบวก", "ประโยคด้านลบ", "ประโยคกระตุ้น", "ประโยคปิด"],
                    datasets: [
                        {
                            label: 'ประโยคตอบกลับ',
                            data: [this.chatopen, this.chatpositive, this.chatnegative, this.chatstimulate, this.chatclose],
                            borderColor: [" rgb(255, 26, 104, 0.2)",
                            ],
                            backgroundColor: ["rgb(255, 26, 104, 0.5)",],
                            tension: 0.4,
                            fill: true
                        },
                        // {
                        //     label: 'Dataset 2',
                        //     data: [this.chatnegative],
                        //     borderColor: [" rgb(54, 162, 235)"],
                        //     backgroundColor: [" rgb(54, 162, 235)"],
                        // }
                    ]


                },



            });
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            beforeUnmount() {
                if (this.chart) {
                    this.chart.destroy();
                }
            },
        }
    }
};
</script>
