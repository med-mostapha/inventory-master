import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

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
    <ScrollView className="flex-1 bg-white m-1 rounded-2xl ">
      <Text className=" p-4 text-xl text-black/80 font-medium">
        Low Products Stock
      </Text>
      <FlatList
        className=" mx-1 px-3 py-2 rounded-2xl shadow-md shadow-black/50"
        data={lowProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between p-4 rounded-xl border-b-[1px] border-[#f1f1f1]">
            <Text className="">{item.name}</Text>
            <View className="flex flex-row gap-2 items-center">
              <Text>{item.quantity}</Text>

              <Ionicons name="arrow-down" size={14} color={"red"} />
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default LowStockList;
