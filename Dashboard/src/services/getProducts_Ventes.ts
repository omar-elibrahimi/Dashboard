
// services.ts
import { Product, Sale } from "../models/getProducts_Ventes"

export class ProductListService {
   
    async getAllProductsWithSales() {
        try {
            // 1-get products from database with find() and stored in products
            const products = await Product.find().lean(); 

     
            const productsWithSales = await Promise.all(
                //3- associe a chaque produit son sales avec map
                products.map(async (product) => {
                    // 2-get sales from database with find by productID 
                    const sales = await Sale.find({ ProductID: product.ProductID }).lean();
                    // 4-retourner tous les produits avec les sales 
                    return { ...product, sales };
                })
            );

            return productsWithSales;
        } catch (error) {
            throw new Error("Erreur lors de la récupération des produits avec leurs ventes.");
        }
    }

    async getMostSoldProducts(limit?: number) {
        try {
          // Define the pipeline stages with proper typing
          const pipeline: any[] = [
            {
              $group: {
                _id: "$ProductID",
                totalQuantity: { $sum: "$Quantity" }
              }
            },
            { 
              $sort: { totalQuantity: -1 } 
            }
          ];
    
          // Add limit stage if specified
          if (limit) {
            pipeline.push({ $limit: limit });
          }
    
          const salesAggregation = await Sale.aggregate(pipeline);
    
          // Get product details for the aggregated sales
          const mostSoldProducts = await Promise.all(
            salesAggregation.map(async (sale) => {
              const product = await Product.findOne({ ProductID: sale._id }).lean();
              return {
                productName: product?.ProductName,
                productID: sale._id,
                totalQuantity: sale.totalQuantity,
                category: product?.Category
              };
            })
          );
    
          return mostSoldProducts;
        } catch (error) {
          throw new Error("Erreur lors de la récupération des produits les plus vendus.");
        }
      }

      async getMostSoldCategories() {
        try {
          // Get all products with their sales
          const products = await Product.find().lean();
          const categorySales = new Map<string, number>();
    
          // Get all sales for each product and aggregate by category
          await Promise.all(
            products.map(async (product) => {
              const sales = await Sale.find({ ProductID: product.ProductID }).lean();
              const totalQuantity = sales.reduce((sum, sale) => sum + sale.Quantity, 0);
              
              // Add quantity to category total
              const currentTotal = categorySales.get(product.Category) || 0;
              categorySales.set(product.Category, currentTotal + totalQuantity);
            })
          );
    
          // Convert Map to array and sort by quantity in descending order
          const sortedCategories = Array.from(categorySales.entries()).map(([category, totalQuantity]) => ({
            category,
            totalQuantity
          })).sort((a, b) => b.totalQuantity - a.totalQuantity);
    
          return sortedCategories;
        } catch (error) {
          throw new Error("Erreur lors de la récupération des catégories les plus vendues.");
        }
      }


      
}
