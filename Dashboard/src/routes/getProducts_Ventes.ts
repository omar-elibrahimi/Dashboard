import { Router } from "express";
import { ProductListController } from "../controllers/getProducts_Ventes";
import { TotalSalesController } from "../controllers/getProducts_Ventes";
import { CategorySalesController } from  "../controllers/getProducts_Ventes";
const router = Router();
const productListController = new ProductListController();
const totalSalesController = new TotalSalesController();
const categorySalesController = new CategorySalesController();
/**
 * Route pour récupérer les produits avec leurs ventes.
 */
router.get("/products", (req, res) => productListController.getProductsWithSales(req, res));
router.get("/totalVentes", (req, res) => totalSalesController.getTotalSales(req, res));
router.get("/statistiques", (req, res) => categorySalesController.getCategorySalesStats(req, res));
export default router;

// totale 

