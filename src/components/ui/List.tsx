import { enListTypes } from "@/src/types/enums";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type ListItem = {
  id: string;
  name: string;
  value: number;
};

type Props = {
  title: string;
  itemName: string;
  itemValue: string;
  data?: ListItem[];
  type?: enListTypes;
};

const List = ({ title, data, itemName, itemValue, type }: Props) => {
  const unit = (type: enListTypes) => {
    switch (type) {
      case enListTypes.TotalPriceList:
        return <Text className="text-gray-700">MRU</Text>;

      case enListTypes.Products:
        return (
          <Ionicons name="cube-outline" color={colors.gray[400]} size={16} />
        );

      case enListTypes.Categories:
        return (
          <Ionicons
            name="file-tray-stacked-outline"
            color={colors.gray[400]}
            size={16}
          />
        );
      // case enListTypes.TotalStock:
      case enListTypes.LowStockProducts:
        return (
          <Ionicons
            name="trending-down-sharp"
            color={colors.red[500]}
            size={16}
          />
        );

      default:
        break;
    }
  };

  if (!data || data.length === 0) {
    return (
      <View className="flex-1 items-center h-screen justify-center bg-white/80">
        <Text className="text-base text-gray-500 font-medium">
          No results found
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      className="mx-2 my-2 rounded-2xl bg-white shadow-lg"
      data={data}
      scrollEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row justify-between items-center p-4 rounded-xl border-b border-gray-200">
          <Text className="text-base text-black">{item.name}</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-base text-gray-700">{item.value}</Text>
            {type && unit(type)}
          </View>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <View>
          {/* Title */}
          <View className="px-4 py-6">
            <Text className="font-semibold text-xl text-black/80">{title}</Text>
          </View>

          {/* Column headers */}
          <View className="flex-row justify-between px-4 py-2 border-b border-gray-200">
            <Text className="font-medium text-lg text-black">{itemName}</Text>
            <Text className="font-medium text-lg text-black">{itemValue}</Text>
          </View>
        </View>
      }
    />
  );
};

export default List;
