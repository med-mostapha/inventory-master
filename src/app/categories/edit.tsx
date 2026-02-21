import CategorisForm from "@/components/categories/CategoriesForm";
import { Category } from "@/types/category";
import { api } from "@/utils/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const EditCategoriesScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await api.get(`/categories/${id}/`);
        setCategory(res.data);
      } catch (error) {
        console.error("Failed to fetch category");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCategory();
  }, [id]);

  const handleUpdate = async (data: any) => {
    try {
      await api.put(`/categories/${id}/`, data);
      router.back();
    } catch (error) {
      console.error("Failed to update category");
    }
  };

  if (loading || !category) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-2 bg-white/90 dark:bg-gray-800">
      <CategorisForm category={category} onSubmit={handleUpdate} />
    </View>
  );
};

export default EditCategoriesScreen;
