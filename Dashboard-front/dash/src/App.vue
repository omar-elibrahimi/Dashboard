<template>
  <div id="app">
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script>
import axios from "axios"; // Import Axios

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  created() {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        console.log(response.data); // Log the data to the console
        this.products = response.data;
        this.loading = false;
      })
      .catch((err) => {
        this.error = err.message;
        this.loading = false;
      });
  },
};
</script>


<style>
.error {
  color: red;
  font-weight: bold;
}
</style>
