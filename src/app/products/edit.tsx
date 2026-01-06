import ProductsForm from "@/components/products/ProductsForm";
import { products } from "@/data/products";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const EditProductsScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View className="bg-white/90 dark:bg-gray-900 flex-1">
      <ProductsForm product={products.find((p) => (p.id = params.id))} />
    </View>
  );
};

export default EditProductsScreen;
