<template>
    <div class="body">
      <canvas ref="chart"  class="chart"></canvas>
      
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
        chatpositive:"",
        chatnegative:""
      };
    },
    async mounted() {
      this.getchatpositive();
      this.getchatnegative();

      const response = await axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/queryChatPositive");
      this.chartData = response.data;
      // console.log(response.data)
      this.renderChart();
    },
    methods: {
      
        getchatpositive() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/queryChatPositive").then((response) => {
        this.chatpositive = response.data.length;
        console.log("ข้อความตอบกลับบวก : "+response.data.length); 
      });
    },

    getchatnegative() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/queryChatNegative").then((response) => {
        this.chatnegative = response.data.length;
        console.log("ข้อความตอบกลับลบ : "+response.data.length); 
      });
    },
      renderChart() {
        const ctx = this.$refs.chart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["ด้านบวก","ด้านลบ"],
            datasets: [{
              label: 'My Chart',
              data: [this.chatpositive,this.chatnegative],
              backgroundColor: [
             
              "rgb(240,128,128)",
              "rgb(255, 165, 0)",
            ],
            }],
          },
        });
      },
    },
    beforeUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    },
  };
  </script>
  <style scoped>

.chart{
  height: 230px !important;
  width: 230px !important;
 
}
.body{
  margin-left: 22%;
}
@media screen and (min-width: 340px) and (max-width: 768px) {
  .chart{
  height: 200px !important;
  width: 200px !important;
 
}
  .body{
  margin-left: 18%;
}}
</style>