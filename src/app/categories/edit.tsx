import CategorisForm from "@/components/categories/CategoriesForm";
import { categories } from "@/data/categoris";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const EditCategoriesScreen = () => {
  const param = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 bg-white/90 dark:bg-gray-900">
      <Text>{param.id}</Text>
      <CategorisForm category={categories.find((c) => (c.id = param.id))} />
    </View>
  );
};

export default EditCategoriesScreen;
