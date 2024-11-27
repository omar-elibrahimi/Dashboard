import { Request, Response } from "express";
import { ProductService } from "../services/products";

const productService = new ProductService();

export class ProductController {
    /**
     * Gère la requête pour récupérer tous les produits
     */
    getProducts(req: Request, res: Response): void {
        try {
            const products = productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "An error occurred while fetching products." });
        }
    }
}


// cotroller get produt ventes
import { Request, Response } from "express";
import { ProductListService } from "../services/product-list.service";

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
}
    