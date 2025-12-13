import AddProductButton from "@/src/components/products/AddProductButton";
import ProductCard from "@/src/components/products/ProductCard";
import ProductsFilterNav from "@/src/components/products/ProductsFilterNav";
import SearchBar from "@/src/components/ui/SearchBar";
import { categories } from "@/src/data/categoris";
import { products } from "@/src/data/products";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

export default function ProductScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white/80 ">
      <View className="px-3 pt-3">
        <SearchBar placeholder="products..." onChange={() => {}} />

        <View className="flex flex-row items-center rounded-xl">
          <View className="">
            <AddProductButton
              onPress={() => {
                router.push("/products/add");
              }}
            />
          </View>
          <ProductsFilterNav categoris={categories} />
        </View>
      </View>
      {/* <Text className="text-2xl left-3 font-bold">Product List</Text> */}
      <View className="flex-1 justify-center ">
        <FlatList
          className="p-3"
          data={products.slice(0, 20)}
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
        />
      </View>
    </View>
  );
}
