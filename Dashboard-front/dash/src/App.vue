<!-- app.vue -->
<template>
  <div id="app">
    <h1>Vue.js and Chart.js Demo</h1>
    <ChartComponent />
    <CategoryComponent />
  </div>
</template>

<script>
import ChartComponent from "./ChartComponent.vue";
import CategoryComponent from "./CategoryComponent.vue";

export default {
  name: "App",
  components: {
    ChartComponent,
    CategoryComponent
  },
};
</script>

<style>
#app {
  text-align: center;
  margin: 20px;
}
</style>
