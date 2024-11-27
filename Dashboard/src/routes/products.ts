import { Router } from "express";
import { ProductController } from "../controllers/products";

const router = Router();
const productController = new ProductController();

/**
 * Définition des routes pour les produits
 */
router.get("/products", (req, res) => productController.getProducts(req, res));

export default router;


// routes get product ventes

import { Router } from "express";
import { ProductListController } from "../controllers/product-list.controller";

const router = Router();
const productListController = new ProductListController();

/**
 * Route pour récupérer les produits avec leurs ventes.
 */
router.get("/products", (req, res) => productListController.getProductsWithSales(req, res));

export default router;
