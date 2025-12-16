import { Product } from "@/src/types/product";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  data: Product[];
  listType?: string;
};

const List = ({ title, data }: Props) => {
  if (!data) return null;

  return (
    <FlatList
      className=" mx-1 px-3 py-2 rounded-2xl bg-white  shadow-gray-300 mb-8 "
      data={data}
      scrollEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.dismissTo({
              pathname: "/products/details",
              params: { id: item.id, name: item.name },
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
        <View className=" px-4 py-6 text-xl flex flex-row justify-between items-center text-black/80 font-medium ">
          <Text className="font-medium">{title}</Text>
          {/* <TouchableOpacity
            className="bg-zinc-50 p-1 rounded-full"
            onPress={() => router.back()}
          >
            <Ionicons name="close" size={24} color={"black"} />
          </TouchableOpacity> */}
        </View>
      }
    />
  );
};

export default List;
