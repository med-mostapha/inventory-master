import { products } from "@/src/data/products";
import { categories } from "../data/categoris";

import { Categorie } from "../types/  categori";
import { Product } from "../types/product";

export const analytics = {
  totalProducts: products.length,

  totalCategories: categories.length,

  totalStock: products.reduce(
    (sum: number, product: Product) => sum + product.quantity,
    0
  ),

  lowStockCount: products.filter((product: Product) => product.quantity <= 5)
    .length,

  totalPrice: Number(
    products
      .reduce(
        (sum: number, product: Product) =>
          sum + product.price * product.quantity,
        0
      )
      .toFixed(2)
  ),
  // LowProductsStock: products
  // .filter((p) => p.quantity <= 5)
  // .map((p) => ({
  //   id: p.id,
  //   name: p.name,
  //   value: p.quantity
  // })),

  // totalPriceList  lowStockList  totalStockList categoris products

  getList(type: string) {
    switch (type) {
      case "products":
        return products.map((p) => ({
          id: p.id,
          name: p.name,
          value: p.price,
        }));

      case "categoris":
        return categories.map((c) => ({
          id: c.id,
          name: c.name,
          value: c.count,
        }));

      case "totalStockList":
        return products.map((p) => ({
          id: p.id,
          name: p.name,
          value: p.quantity,
        }));

      case "lowStockList":
        return products
          .filter((p) => p.quantity <= 5)
          .map((p) => ({
            id: p.id,
            name: p.name,
            value: p.quantity,
          }));

      case "totalPriceList":
        return products.map((p) => ({
          id: p.id,
          name: p.categoryName ?? "Categoris",
          value: Number((p.price * p.quantity).toFixed(2)),
        }));

      default:
        return [];
    }
  },
};

export const categoriesLabels: string[] = categories.map((cat: Categorie) =>
  cat.name.trim()
);

const getCategoryTotalStock = (categoryName: string) => {
  const total = products.reduce(
    (sum: number, product: Product) =>
      product.categoryName?.trim() === categoryName
        ? sum + product.quantity
        : sum,
    0
  );

  return total;
};
export const categoriesStock: number[] = categoriesLabels.map(
  getCategoryTotalStock
);

export const getCategoryTotalPrice = (categoryName: string): number => {
  const total = products.reduce(
    (sum: number, product: Product) =>
      product.categoryName?.trim() === categoryName
        ? sum + product.price * product.quantity
        : sum,
    0
  );

  return Number(total.toFixed(2));
};
export const categoriesData: number[] = categoriesLabels.map(
  getCategoryTotalPrice
);

export const getCategoryStock = (categoryName: string): number =>
  products.reduce(
    (sum: number, product: Product) =>
      product.categoryName?.trim() === categoryName
        ? sum + product.quantity
        : sum,
    0
  );

export const getCategoryProductCount = (categoryName: string): number =>
  products.filter(
    (product: Product) => product.categoryName?.trim() === categoryName
  ).length;

export const formatPrice = (value: number): number => Number(value.toFixed(2));

export const totalPriceByCategory = products.reduce<Record<string, number>>(
  (acc, product) => {
    const category = product.categoryName?.trim() ?? "Unknown";

    acc[category] = (acc[category] ?? 0) + product.price * product.quantity;

    return acc;
  },
  {}
);
