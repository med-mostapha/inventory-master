import SearchBar from "@/src/components/ui/SearchBar";
import { products } from "@/src/data/products";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function ProductScreen() {
  return (
    <View className="p-2">
      <View className="">
        <SearchBar placeholder="products..." onChange={() => {}} />
      </View>
      <Text className=" text-2xl font-bold">Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="">
            <Text className="">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
