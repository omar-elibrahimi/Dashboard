
// controllers.ts
import { Request, Response } from "express";
import { ProductListService } from "../services/getProducts_Ventes";

const productListService = new ProductListService();

export class ProductListController {
    /**
     * Récupère les produits avec leurs ventes.
     */
    async getProductsWithSales(req: Request, res: Response): Promise<void> {
        try {
            const productsWithSales = await productListService.getAllProductsWithSales();
            res.status(200).json(productsWithSales);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des produits avec leurs ventes.", error });
        }
    }
    async getMostSoldProducts(req: Request, res: Response): Promise<void> {
        try {
          const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
          const mostSoldProducts = await productListService.getMostSoldProducts(limit);
          res.status(200).json(mostSoldProducts);
        } catch (error) {
          res.status(500).json({ 
            message: "Erreur lors de la récupération des produits les plus vendus.", 
            error 
          });
        }
      }

      async getMostSoldCategories(req: Request, res: Response): Promise<void> {
        try {
          const categorySales = await productListService.getMostSoldCategories();
          res.status(200).json(categorySales);
        } catch (error) {
          res.status(500).json({
            message: "Erreur lors de la récupération des catégories les plus vendues.",
            error
          });
        }
      }
}
