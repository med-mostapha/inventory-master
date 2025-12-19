import ProductsForm from "@/src/components/products/ProductsForm";
import { View } from "react-native";

const AddProductsScreen = () => {
  return (
    <View className="flex-1  p-2 bg-white/90">
      <ProductsForm />
    </View>
  );
};

export default AddProductsScreen;
