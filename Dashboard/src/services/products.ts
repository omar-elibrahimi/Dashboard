import { Product, products } from "../models/products";

export class ProductService {
    /**
     * Récupère tous les produits
     * @returns Liste des produits
     */
    getAllProducts(): Product[] {
        return products;
    }
}

// service get product ventes

import { Product } from "../models/product.model";
import { Sale } from "../models/sale.model";

export class ProductListService {
    /**
     * Récupère tous les produits avec leurs ventes associées.
     */
    async getAllProductsWithSales() {
        try {
            const products = await Product.find().lean(); // Récupère tous les produits

            // Associe chaque produit à ses ventes
            const productsWithSales = await Promise.all(
                products.map(async (product) => {
                    const sales = await Sale.find({ ProductID: product.ProductID }).lean();
                    return { ...product, sales };
                })
            );

            return productsWithSales;
        } catch (error) {
            throw new Error("Erreur lors de la récupération des produits avec leurs ventes.");
        }
    }
}
