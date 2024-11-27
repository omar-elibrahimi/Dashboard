export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

export const products: Product[] = [
    { id: 1, name: "Product 1", price: 10, description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description for Product 2" },
    { id: 3, name: "Product 3", price: 30 }
];

// product model mongodgb
import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    ProductID: number;
    ProductName: string;
    Category: string;
    Price: number;
}

const ProductSchema: Schema = new Schema({
    ProductID: { type: Number, required: true, unique: true },
    ProductName: { type: String, required: true },
    Category: { type: String, required: true },
    Price: { type: Number, required: true }
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);


// ventes model mongodb

import mongoose, { Schema, Document } from "mongoose";

export interface ISale extends Document {
    SaleID: number;
    ProductID: number;
    Quantity: number;
    Date: Date;
    TotalAmount: number;
}

const SaleSchema: Schema = new Schema({
    SaleID: { type: Number, required: true, unique: true },
    ProductID: { type: Number, required: true },
    Quantity: { type: Number, required: true },
    Date: { type: Date, required: true },
    TotalAmount: { type: Number, required: true }
});

export const Sale = mongoose.model<ISale>("Sale", SaleSchema);
