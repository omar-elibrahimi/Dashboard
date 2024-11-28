<template>
  <div id="app">
    <h1>Vue.js and Chart.js Demo</h1>
    <ChartComponent />
  </div>
</template>

<script>
import ChartComponent from "./ChartComponent.vue";

export default {
  name: "App",
  components: {
    ChartComponent,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin: 20px;
}
</style>
