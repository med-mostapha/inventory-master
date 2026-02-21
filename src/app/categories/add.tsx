import CategorisForm from "@/components/categories/CategoriesForm";
import { api } from "@/utils/api";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const AddCategoriesScreen = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      await api.post("/categories/", data);
      router.back();
    } catch (error) {
      console.error("Failed to create category");
    }
  };

  return (
    <View className="flex-1 p-2 bg-white/90 dark:bg-gray-800">
      <CategorisForm onSubmit={handleSubmit} />
    </View>
  );
};

export default AddCategoriesScreen;
