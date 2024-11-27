/**
import express from "express";
import productRoutes from "../src/routes/products";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les JSON
app.use(express.json());

// Ajouter les routes
app.use( productRoutes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

*/

// app.js get product ventes
import express, { Application } from "express";
import productListRoutes from "../src/routes/getProducts_Ventes";
import totalSalesRoutes from "../src/routes/getProducts_Ventes";
import categorySalesRoutes from "../src/routes/getProducts_Ventes";
import cors from "cors";


const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", productListRoutes);
app.use("/api", totalSalesRoutes); 
app.use("/api", categorySalesRoutes); 
// Démarre le serveur sans la connexion MongoDB
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
