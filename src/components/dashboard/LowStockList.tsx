import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";

const LowStockList = () => {
  const lowProducts = [
    {
      id: 1,
      name: "iPhone 12",
      quantity: 3,
    },
    {
      id: 2,
      name: "Samsung Galaxy A23",
      quantity: 1,
    },
    {
      id: 3,
      name: "AirPods Pro",
      quantity: 4,
    },
  ];

  return (
    <FlatList
      className=" mx-1 px-3 py-2 rounded-2xl bg-white shadow-md shadow-black/50"
      data={lowProducts}
      scrollEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="flex flex-row justify-between p-4 rounded-xl border-b-[1px] border-white">
          <Text className="">{item.name}</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text>{item.quantity}</Text>
            <Ionicons name="arrow-down" size={14} color={"red"} />
          </View>
        </View>
      )}
      ListHeaderComponent={
        <Text className=" p-4 text-xl text-black/80 font-medium">
          Low Products Stock
        </Text>
      }
    />
  );
};

export default LowStockList;
