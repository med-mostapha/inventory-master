import ProductsForm from "@/components/products/ProductsForm";
import { Category } from "@/types/category";
import { api } from "@/utils/api";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const AddProductsScreen = () => {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories/");
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (data: any) => {
    try {
      await api.post("/products/", data);
      router.back();
    } catch (error) {
      console.error("Failed to create product");
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-2 bg-white/90 dark:bg-gray-800">
      <ProductsForm categories={categories} onSubmit={handleSubmit} />
    </View>
  );
};

export default AddProductsScreen;
