import SearchBar from "@/src/components/ui/SearchBar";
import { products } from "@/src/data/products";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function ProductScreen() {
  const router = useRouter();
  return (
    <View className="p-3 flex-1 ">
      <View className="">
        <SearchBar placeholder="products..." onChange={() => {}} />
      </View>
      {/* <Text className="text-2xl font-bold">Product List</Text> */}
      <View className="flex-1 justify-center">
        <FlatList
          className=""
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white w-[49%] h-40 mt-2 p-4 rounded-2xl elevation-md shadow-md shadow-black/15"
              onPress={() =>
                router.push({
                  pathname: "/products/details",
                  params: { id: item.id },
                })
              }
            >
              <Text className="">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
