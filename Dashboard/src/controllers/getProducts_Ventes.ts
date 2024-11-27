import { Request, Response } from "express";
import { ProductListService, TotalSalesService, CategorySalesService } from "../services/getProducts_Ventes";

const productListService = new ProductListService();

export class ProductListController {
    /**
     * Récupère les produits avec leurs ventes.
     */
    async getProductsWithSales(req: Request, res: Response): Promise<void> {
        try {
            const productsWithSales = productListService.getAllProductsWithSales();
            res.status(200).json(productsWithSales);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des produits avec leurs ventes.", error });
        }
    }
}

const totalSalesService = new TotalSalesService();

export class TotalSalesController {
    /**
     * Récupère le coût total des ventes.
     */
    async getTotalSales(req: Request, res: Response): Promise<void> {
        try {
            const total = totalSalesService.calculateTotalSales();
            res.status(200).json({ totalSales: total });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors du calcul du coût total des ventes.", error });
        }
    }
}

//import { CategorySalesService } from "../services/category-sales.service";

const categorySalesService = new CategorySalesService();

export class CategorySalesController {
    /**
     * Récupère les statistiques des ventes par catégorie.
     */
    async getCategorySalesStats(req: Request, res: Response): Promise<void> {
        try {
            const stats = categorySalesService.calculateCategorySales();
            const categoryStats = Object.entries(stats.categoryTotals).reduce((acc: Record<string, number>, [category, data]) => {
                acc[`${category} totale prix`] = data.totalPrice;
                return acc;
            }, {});

            res.status(200).json({
                ...categoryStats,
                "categorie plus vendu par quantite": stats.maxQuantityCategory.category,
                "categorie plus vendu par prix": stats.maxPriceCategory.category
            });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors du calcul des statistiques des ventes par catégorie.", error });
        }
    }
}