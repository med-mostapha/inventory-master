import { Category } from "../types/  categori";
import { products } from "./products";

export const categories: Category[] = [
  {
    id: "c4",
    name: "Electronics",
    description: "Electronic devices such as phones, laptops, and accessories.",
    count: products.filter((p) => p.categoryId === "c4").length,
  },
  {
    id: "c1",
    name: "Shoes",
    description:
      "All types of shoes including sports, casual, and formal footwear.",
    count: products.filter((p) => p.categoryId === "c1").length,
  },
  {
    id: "c2",
    name: "Accessories",
    description: "Fashion accessories like bags, watches, belts, and jewelry.",
    count: products.filter((p) => p.categoryId === "c2").length,
  },
  {
    id: "c5",
    name: "Home",
    description:
      "Home essentials including furniture, decor, and household items.",
    count: products.filter((p) => p.categoryId === "c5").length,
  },
  {
    id: "c8",
    name: "Clothing",
    description:
      "Men’s and women’s clothing for everyday and special occasions.",
    count: products.filter((p) => p.categoryId === "c8").length,
  },
  {
    id: "c9",
    name: "Office",
    description: "Office supplies, stationery, and work-related equipment.",
    count: products.filter((p) => p.categoryId === "c9").length,
  },
];
