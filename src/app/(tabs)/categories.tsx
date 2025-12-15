import SearchBar from "@/src/components/ui/SearchBar";
import { products } from "@/src/data/products";
import { Text, View } from "react-native";

export default function CategoriesScreen() {
  console.log(
    products.reduce((sum, p) => {
      if (p.categoryName === "Electronics") {
        return sum + p.quantity;
      }
      return sum;
    }, 0)
  );

  console.log(
    products.reduce((sum, p) => {
      if (p.categoryName === "Shoes") {
        return sum + p.quantity;
      }
      return sum;
    }, 0)
  );
  return (
    <View className="p-2 flex-1">
      <View className="">
        <SearchBar placeholder="gategoris..." onChange={() => {}} />
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className=" text-2xl font-bold">Categories Screen</Text>
        <View></View>
      </View>
    </View>
  );
}
