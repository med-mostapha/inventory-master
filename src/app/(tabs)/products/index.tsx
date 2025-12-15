import AddProductButton from "@/src/components/products/AddProductButton";
import ProductCard from "@/src/components/products/ProductCard";
import ProductsFilterNav from "@/src/components/products/ProductsFilterNav";
import SearchBar from "@/src/components/ui/SearchBar";
import { categories } from "@/src/data/categoris";
import { products } from "@/src/data/products";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function ProductScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoriesWithAll = useMemo(() => {
    return [
      {
        id: "all",
        name: "All",
        count: products.length,
      },
      ...categories,
    ];
  }, []);

  return (
    <View className="flex-1 bg-white/80 ">
      <View className="px-3 pt-3">
        <SearchBar
          placeholder="products..."
          onChange={(text) => setSearchQuery(text)}
        />

        <View className="flex flex-row items-center rounded-xl">
          <View className="">
            <AddProductButton
              onPress={() => {
                router.push("/products/add");
              }}
            />
          </View>
          <ProductsFilterNav
            categoris={categoriesWithAll}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </View>
      </View>
      {/* <Text className="text-2xl left-3 font-bold">Product List</Text> */}
      <View className="flex-1 justify-center ">
        <FlatList
          className="p-2"
          data={filteredProducts}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() =>
                router.push({
                  pathname: "/products/details",
                  params: { id: item.id, name: item.name },
                })
              }
            />
          )}
          ListEmptyComponent={
            <View className="flex-1 items-center">
              <Text className="text-zinc-500/50 ">No products found!</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
