import ProductCard from "@/src/components/ProductCard";
import ProductsFilterNav from "@/src/components/products/ProductsFilterNav";
import SearchBar from "@/src/components/ui/SearchBar";
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

        <ProductsFilterNav
          // this info just for test
          types={[
            { name: "All", count: products.length },
            { name: "Électronique", count: 12 },
            { name: "Maison", count: 8 },
            { name: "Bureau", count: 6 },
            { name: "Jardin", count: 4 },
            { name: "Vêtements", count: 10 },
            { name: "Accessoires", count: 7 },
            { name: "Sport", count: 5 },
            { name: "Beauté", count: 3 },
          ]}
        />
      </View>
      {/* <Text className="text-2xl left-3 font-bold">Product List</Text> */}
      <View className="flex-1 justify-center p">
        -2
        <FlatList
          className=""
          data={products}
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
