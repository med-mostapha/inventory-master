import ProductsForm from "@/components/products/ProductsForm";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { api } from "@/utils/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const EditProductScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoriesRes] = await Promise.all([
          api.get(`/products/${id}/`),
          api.get("/categories/"),
        ]);

        setProduct(productRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleUpdate = async (data: any) => {
    try {
      await api.put(`/products/${id}/`, data);
      router.dismissTo("/products");
    } catch (error) {
      console.error("Failed to update product");
    }
  };

  if (loading || !product) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-2 bg-white/80 dark:bg-gray-800">
      <ProductsForm
        product={product}
        categories={categories}
        onSubmit={handleUpdate}
      />
    </View>
  );
};

export default EditProductScreen;
