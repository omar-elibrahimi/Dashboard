import { products, sales, IProduct, ISale } from "../models/getProducts_Ventes";

// Service pour obtenir les produits avec leurs ventes associées
export class ProductListService {
    /**
     * Récupère tous les produits avec leurs ventes associées.
     */
    getAllProductsWithSales() {
        try {
            // Associe chaque produit à ses ventes
            const productsWithSales = products.map((product: IProduct) => {
                const productSales = sales.filter((sale: ISale) => sale.ProductID === product.ProductID);
                return { ...product, sales: productSales };
            });

            return productsWithSales;
        } catch (error) {
            throw new Error("Erreur lors de la récupération des produits avec leurs ventes.");
        }
    }
}

//import { products, sales, IProduct, ISale } from "../models";

export class TotalSalesService {
    /**
     * Calcule le coût total des ventes.
     */
    calculateTotalSales() {
        try {
            // Calcul du total des ventes
            let totalSales = 0;

            // Pour chaque vente, nous allons récupérer le produit associé et multiplier la quantité par le prix
            sales.forEach((sale: ISale) => {
                const product = products.find((product: IProduct) => product.ProductID === sale.ProductID);
                if (product) {
                    totalSales += product.Price * sale.Quantity;
                }
            });

            return totalSales;
        } catch (error) {
            throw new Error("Erreur lors du calcul du coût total des ventes.");
        }
    }
}


//import { products, sales, IProduct, ISale } from "../models";

export class CategorySalesService {
    /**
     * Calcule le total des ventes par catégorie et la catégorie la plus vendue par quantité et prix.
     */
    calculateCategorySales() {
        try {
            // Initialisation des variables pour stocker les résultats
            const categoryTotals: { [key: string]: { totalPrice: number, totalQuantity: number } } = {};
            let maxQuantityCategory = { category: "", quantity: 0 };
            let maxPriceCategory = { category: "", totalPrice: 0 };

            // Calcul du total des ventes par catégorie
            sales.forEach((sale: ISale) => {
                const product = products.find((product: IProduct) => product.ProductID === sale.ProductID);
                if (product) {
                    const category = product.Category;

                    // Mettre à jour le total des ventes pour chaque catégorie
                    if (!categoryTotals[category]) {
                        categoryTotals[category] = { totalPrice: 0, totalQuantity: 0 };
                    }

                    categoryTotals[category].totalPrice += product.Price * sale.Quantity;
                    categoryTotals[category].totalQuantity += sale.Quantity;

                    // Trouver la catégorie la plus vendue par quantité
                    if (categoryTotals[category].totalQuantity > maxQuantityCategory.quantity) {
                        maxQuantityCategory = { category, quantity: categoryTotals[category].totalQuantity };
                    }

                    // Trouver la catégorie la plus vendue par prix
                    if (categoryTotals[category].totalPrice > maxPriceCategory.totalPrice) {
                        maxPriceCategory = { category, totalPrice: categoryTotals[category].totalPrice };
                    }
                }
            });

            return {
                categoryTotals,
                maxQuantityCategory,
                maxPriceCategory
            };
        } catch (error) {
            throw new Error("Erreur lors du calcul des ventes par catégorie.");
        }
    }
}
