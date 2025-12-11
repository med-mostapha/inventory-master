import SearchBar from "@/src/components/ui/SearchBar";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function ProductScreen() {
  return (
    <ScrollView className="p-2">
      <View className="">
        <SearchBar placeholder="products..." onChange={() => {}} />
      </View>
      <Text className=" text-2xl font-bold">Product List</Text>
    </ScrollView>
  );
}
