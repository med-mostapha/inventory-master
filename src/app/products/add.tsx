import ProductsForm from "@/src/components/products/ProductsForm";
import { router } from "expo-router";
import { View } from "react-native";

const AddProductsScreen = () => {
  return (
    <View className="flex-1  p-2 bg-white/90">
      <ProductsForm onSubmit={() => router.back()} />
    </View>
  );
};

export default AddProductsScreen;
