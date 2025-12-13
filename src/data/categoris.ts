import { products } from "./products";

export const categories = [
  {
    id: "c1",
    name: "Chaussures",
    count: products.filter((p) => p.categoryId === "c1").length,
  },
  {
    id: "c2",
    name: "Accessoires",
    count: products.filter((p) => p.categoryId === "c2").length,
  },
  {
    id: "c4",
    name: "Électronique",
    count: products.filter((p) => p.categoryId === "c4").length,
  },
  {
    id: "c5",
    name: "Maison",
    count: products.filter((p) => p.categoryId === "c5").length,
  },
  {
    id: "c8",
    name: "Vêtements",
    count: products.filter((p) => p.categoryId === "c8").length,
  },
  {
    id: "c9",
    name: "Bureau",
    count: products.filter((p) => p.categoryId === "c9").length,
  },
];
