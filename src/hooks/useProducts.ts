// src/hooks/useProducts.ts
import { products as productsData } from "@/src/data/products";
import { Product } from "@/src/types/product";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setLoading(true);

      await new Promise((res) => setTimeout(res, 500));
      setProducts(productsData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { products, loading };
}
