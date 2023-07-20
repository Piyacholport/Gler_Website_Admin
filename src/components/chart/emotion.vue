<template>
    <div>
      <canvas ref="chart" width="700" height="230"></canvas>
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
        level:[]
      };
    },
    async mounted() {
      this.getlevel();

      const response = await axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/getlevel");
      this.chartData = response.data;
      // console.log(response.data)
      this.renderChart();

      // this.chartData = response.data.length;
      //   console.log("การประเมินอารมณ์ทั้งหมด : "+response.data.length);
        
      //   this.uncomfortable = response.data.filter((item)=>item.chartData == '1').length;
      //   this.worried = response.data.filter((item)=>item.chartData == '2').length;
      //   this.normal = response.data.filter((item)=>item.chartData == '3').length;
      //   this.relaxed = response.data.filter((item)=>item.chartData == '4').length;
      //   this.comfortable = response.data.filter((item)=>item.chartData == '5').length;
      //   console.log("ไม่สบายใจมาก : "+this.uncomfortable);
      //   console.log("ไม่สบายใจ : "+this.worried);
      //   console.log("เฉยๆ : "+this.normal);
      //   console.log("สบายใจ : "+this.relaxed);
      //   console.log("สบายใจมาก :"+this.comfortable);
    },
    methods: {
      
      getlevel() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL+"/getlevel").then((response) => {
        this.level = response.data.length;
        console.log("การประเมินอารมณ์ทั้งหมด : "+response.data.length);
        
        this.uncomfortable = response.data.filter((item)=>item.level == '1').length;
        this.worried = response.data.filter((item)=>item.level == '2').length;
        this.normal = response.data.filter((item)=>item.level == '3').length;
        this.relaxed = response.data.filter((item)=>item.level == '4').length;
        this.comfortable = response.data.filter((item)=>item.level == '5').length;
        console.log("ไม่สบายใจมาก : "+this.uncomfortable);
        console.log("ไม่สบายใจ : "+this.worried);
        console.log("เฉยๆ : "+this.normal);
        console.log("สบายใจ : "+this.relaxed);
        console.log("สบายใจมาก :"+this.comfortable);
        
      });
    },
      renderChart() {
        const ctx = this.$refs.chart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["ไม่สบายใจมาก","ไม่สบายใจ","เฉยๆ","สบายใจ","สบายใจมาก"],
            datasets: [{
              label: 'ระดับอารมณ์',
              data: [this.uncomfortable,this.worried,this.normal,this.relaxed,this.comfortable],
              backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              'rgba(153, 102, 255)',
              'rgba(75, 192, 192)',
            ],
              fill: false,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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