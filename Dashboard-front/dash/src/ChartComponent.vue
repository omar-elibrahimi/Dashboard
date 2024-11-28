<template>
  <div>
    <h2>Products Sorted by Price</h2>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
import axios from 'axios';

export default {
  name: "ChartComponent",
  data() {
    return {
      chart: null,
      products: [], // This will hold the product data fetched from the API
    };
  },
  mounted() {
    // Register all necessary components
    Chart.register(...registerables);
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // Fetch data from the backend API
        const response = await axios.get("http://localhost:3000/api/products");
        this.products = response.data;

        // Sort the products by price
        this.products.sort((a, b) => a.Price - b.Price);

        // Render the chart after fetching and sorting the data
        this.renderChart();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    renderChart() {
      const ctx = this.$refs.chart.getContext("2d");

      // Prepare data for the chart
      const labels = this.products.map((product) => product.ProductName);
      const prices = this.products.map((product) => product.Price);

      // Create the chart
      this.chart = new Chart(ctx, {
        type: "bar", // Using a bar chart
        data: {
          labels: labels, // Product names on the x-axis
          datasets: [
            {
              label: "Product Prices",
              data: prices, // Prices as the y-axis values
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 400px;
}
</style>
