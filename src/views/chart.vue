<template>
 
 <input type="text" v-model="numericInput" @input="filterNonNumeric" />

  <!-- <div>
    <chart />
  </div> -->
</template>

<script>

// import chart  from "../components/chart/total.vue";
export default {

  // components: { chart },
  data() {
				return {
					numericInput: ""
				}
      },
      methods: {
				filterNonNumeric() {
					// Replace non-numeric characters with an empty string
					this.numericInput = this.numericInput.replace(/[^0-9]/g, "");
				}
			}
}
</script>

<style>

</style>