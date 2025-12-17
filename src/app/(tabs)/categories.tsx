import CategoriesCard from "@/src/components/categories/CategoriesCard";
import SearchBar from "@/src/components/ui/SearchBar";
import { categories } from "@/src/data/categoris";
import { FlatList, Text, View } from "react-native";

export default function CategoriesScreen() {
  return (
    <View className="p-2 flex-1 bg-white/90">
      <View className="">
        <SearchBar placeholder="gategoris..." onChange={() => {}} />
      </View>
      <View className="flex-1 justify-center ">
        <FlatList
          className="p-2"
          data={categories}
          keyExtractor={(item) => item.id}
          // columnWrapperStyle={{ gap: 10 }}
          // contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => <CategoriesCard categorie={item} />}
          ListEmptyComponent={
            <View className="flex-1 mt-10 items-center">
              <Text className="text-zinc-500/50 ">
                No results match your search
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
