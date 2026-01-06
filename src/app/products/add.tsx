import ProductsForm from "@/components/products/ProductsForm";
import { View } from "react-native";

const AddProductsScreen = () => {
  return (
    <View className="flex-1  p-2 bg-white/90 dark:bg-gray-800">
      <ProductsForm />
    </View>
  );
};

export default AddProductsScreen;
