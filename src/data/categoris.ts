import { products } from "./products";

export const categories = [
  {
    id: "c4",
    name: "Electronics",
    count: products.filter((p) => p.categoryId === "c4").length,
  },
  {
    id: "c1",
    name: "Shoes",
    count: products.filter((p) => p.categoryId === "c1").length,
  },
  {
    id: "c2",
    name: "Accessories",
    count: products.filter((p) => p.categoryId === "c2").length,
  },

  {
    id: "c5",
    name: "Home",
    count: products.filter((p) => p.categoryId === "c5").length,
  },
  {
    id: "c8",
    name: "Clothing",
    count: products.filter((p) => p.categoryId === "c8").length,
  },
  {
    id: "c9",
    name: "Office",
    count: products.filter((p) => p.categoryId === "c9").length,
  },
];
