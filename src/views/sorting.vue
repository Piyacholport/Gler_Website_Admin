<template>
  <div id="app">
    <div class="container">
      <div class="btn-wrapper">
        <button class="btn" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
        <button class="btn" type="button" :disabled="currentPage === 5" @click="changePage(1)">Next >></button>
      </div>

      <div class="user" v-for="item in filteredList" :key="item">
        <div class="text-wrapper">
          <h3>
            {{ item.id }}
          </h3>
          <h3>
            {{ item.Text }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      id: '',
      Text: '',
      loaddata: [],
      list: [],
      prePage: 5,
      currentPage: 1,
      sortBy: "iddocs",
      first: "desc",
      snapshot: "Text"

    }

  },
  computed: {

    filteredList() {
      // cu1 filter 0~5
      // cu2 filter 6~10
      // (x-1)*n  .. x * n
      console.log('this.currentPage', this.currentPage)
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      console.log(star, end)
      console.log('computed', this.loaddata)
      console.log('result', this.loaddata.slice(star, end))
      const result = this.loaddata.slice(star, end)
      return result
    }
  },


  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/paginate", { params: { sortBy: this.sortBy, first: this.first} }).then((response) => {
        this.loaddata = response.data;
        console.log(response);
      });
      // axios.get(process.env.VUE_APP_BACKEND_BASE_URL + "/chatopen" )
      //   .then(res => {
      //     this.loaddata = res.data;
      //   console.log(res);
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    changePage(num) {
      console.log('num', num)
      console.log('this.currentPage', this.currentPage)
      this.currentPage = this.currentPage + num
    }
  }


}



</script>

<style></style>