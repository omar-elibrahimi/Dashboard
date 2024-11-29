
// routes.ts
import { Router } from "express";
import { ProductListController } from "../controllers/getProducts_Ventes";

const router = Router();
const productListController = new ProductListController();

/**
 * Route pour récupérer les produits avec leurs ventes.
 */
router.get("/products", (req, res) => productListController.getProductsWithSales(req, res));
router.get("/products/most-sold", (req, res) => productListController.getMostSoldProducts(req, res));

router.get("/categories/most-sold", (req, res) => 
    productListController.getMostSoldCategories(req, res)
  );
export default router;
