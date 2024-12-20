
// app.ts
import express, { Application } from "express";
import mongoose from "mongoose";
import productListRoutes from "./routes/getProducts_Ventes";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/api", productListRoutes);

// In your app.ts
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Connexion à MongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster0.kbohmbm.mongodb.net/").then(() => {
    console.log("Connecté à la base MongoDB.");
    app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
}).catch(err => {
    console.error("Erreur de connexion à MongoDB :", err);
});
