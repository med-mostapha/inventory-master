import { Product } from "@/src/types/product";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  data: Product[];
};

const LowStockList = ({ title, data }: Props) => {
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
  const [showLowList, setShowLowList] = useState(false);

  if (!data) return null;

  return (
    <FlatList
      className=" mx-1 px-3 py-2 rounded-2xl bg-white  shadow-gray-300 mb-8 "
      data={showLowList ? data : []}
      scrollEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.dismissTo({
              pathname: "/products/details",
              params: { id: item.id },
            })
          }
          className="flex flex-row justify-between p-4 rounded-xl border-b-[1px] border-zinc-100"
        >
          <Text className="">{item.name}</Text>
          <View className="flex flex-row gap-2 items-center">
            <Text>{item.quantity}</Text>
            <Ionicons name="arrow-down" size={14} color={"red"} />
          </View>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => setShowLowList(!showLowList)}
          className=" p-4 text-xl flex flex-row justify-between items-center text-black/80 font-medium "
        >
          <Text>{title}</Text>
          <Entypo
            name={showLowList ? "chevron-down" : "chevron-right"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      }
    />
  );
};

export default LowStockList;
