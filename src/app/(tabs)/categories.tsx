import SearchBar from "@/src/components/ui/SearchBar";
import { Text, View } from "react-native";

export default function CategoriesScreen() {
  return (
    <View className="p-2">
      <View className="">
        <SearchBar placeholder="gategoris..." onChange={() => {}} />
      </View>
      <Text className=" text-2xl font-bold">Categories Screen</Text>
    </View>
  );
}
