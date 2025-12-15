import SearchBar from "@/src/components/ui/SearchBar";
import { Text, View } from "react-native";

export default function CategoriesScreen() {
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
