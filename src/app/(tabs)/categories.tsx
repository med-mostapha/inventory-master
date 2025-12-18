import CategoriesCard from "@/src/components/categories/CategoriesCard";
import PrButton from "@/src/components/products/PrButton";
import SearchBar from "@/src/components/ui/SearchBar";
import { categories } from "@/src/data/categoris";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function CategoriesScreen() {
  return (
    <View className="p-2 flex-1 bg-white/90">
      <View className="">
        <SearchBar placeholder="Categoris..." onChange={() => {}} />
      </View>
      <View className="px-3 py-3 flex flex-row  items-center justify-between">
        <View className="flex flex-row gap-3 items-center ">
          {/* <MaterialIcons name="category" size={20} color={colors.blue[500]} /> */}
          <Text className="text-lg">{categories.length}</Text>
        </View>
        <View className="w-1/3">
          <PrButton
            title={"Add Category"}
            thems="small"
            onPress={() => {
              router.push("/categories/add");
            }}
          />
        </View>
      </View>
      <View className="flex-1 justify-center ">
        <FlatList
          className="p-2"
          data={categories}
          keyExtractor={(item) => item.id}
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
