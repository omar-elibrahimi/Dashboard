// Product model simple pour tester avec des données statiques

export interface IProduct {
    ProductID: number;
    ProductName: string;
    Category: string;
    Price: number;
}

// Simulons une base de données avec des données statiques
export const products: IProduct[] = [
    { ProductID: 1, ProductName: "Produit 1", Category: "Catégorie A", Price: 150 },
    { ProductID: 2, ProductName: "Produit 2", Category: "Catégorie B", Price: 200 },
    { ProductID: 3, ProductName: "Produit 3", Category: "Catégorie C", Price: 300 },
    { ProductID: 4, ProductName: "Produit 4", Category: "Catégorie B", Price: 300 },
    { ProductID: 5, ProductName: "Produit 5", Category: "Catégorie B", Price: 300 },
    { ProductID: 6, ProductName: "Produit 6", Category: "Catégorie B", Price: 300 },
    { ProductID: 7, ProductName: "Produit 7", Category: "Catégorie B", Price: 300 }
];

// Ventes model simple pour tester avec des données statiques

export interface ISale {
    SaleID: number;
    ProductID: number;
    Quantity: number;
    Date: Date;
    TotalAmount: number;
}

// Simulons une base de données avec des ventes statiques
export const sales: ISale[] = [
    { SaleID: 1, ProductID: 1, Quantity: 2, Date: new Date(), TotalAmount: 200 },
    { SaleID: 2, ProductID: 2, Quantity: 1, Date: new Date(), TotalAmount: 200 },
    { SaleID: 3, ProductID: 3, Quantity: 3, Date: new Date(), TotalAmount: 900 },
    { SaleID: 4, ProductID: 4, Quantity: 3, Date: new Date(), TotalAmount: 900 },
    { SaleID: 5, ProductID: 5, Quantity: 3, Date: new Date(), TotalAmount: 900 },
    { SaleID: 6, ProductID: 6, Quantity: 3, Date: new Date(), TotalAmount: 900 },
    { SaleID: 7, ProductID: 7, Quantity: 3, Date: new Date(), TotalAmount: 900 }
];
