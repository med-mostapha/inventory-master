import { products } from "@/src/data/products";
import { categories } from "../data/categoris";

export const data = {
  totalProducts: products.length,
  totalGategoris: categories.length,
  totalStock: products.reduce((sum, product) => sum + product.quantity, 0),
  lowStockCount: products.filter((p) => p.quantity <= 5).length,
  totalPrice: products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  ),
};
