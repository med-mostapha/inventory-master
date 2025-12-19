import CategorisForm from "@/src/components/categories/CategoriesForm";
import React from "react";
import { View } from "react-native";

const AddCategoriesScreen = () => {
  return (
    <View className="flex-1  p-2 bg-white/90">
      <CategorisForm />
    </View>
  );
};

export default AddCategoriesScreen;
