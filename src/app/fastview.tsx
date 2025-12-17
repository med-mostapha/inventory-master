import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import List from "../components/ui/List";
import { enListTypes } from "../types/enums";
import { analytics } from "../utils/detailedAnalysis";

const listConfig: Record<
  enListTypes,
  { title: string; itemName: string; itemValue: string }
> = {
  [enListTypes.Products]: {
    title: "Products",
    itemName: "Product",
    itemValue: "Quantity",
  },
  [enListTypes.Categories]: {
    title: "Categories",
    itemName: "Category",
    itemValue: "Number of products",
  },
  [enListTypes.TotalStock]: {
    title: "Total Stock",
    itemName: "Product",
    itemValue: "Quantity",
  },
  [enListTypes.LowStockProducts]: {
    title: "Low stock products",
    itemName: "Product",
    itemValue: "Quantity",
  },
  [enListTypes.TotalPriceList]: {
    title: "Total Price",
    itemName: "Product",
    itemValue: "Stock price",
  },
};

const FastViewScreen = () => {
  const param = useLocalSearchParams<{ type?: enListTypes }>();
  const type = param.type;

  if (!type || !listConfig[type]) return null;

  const config = listConfig[type];

  return (
    <ScrollView className="flex-1 mb-10 bg-white/90">
      <List
        title={config.title}
        itemName={config.itemName}
        itemValue={config.itemValue}
        data={analytics.getList(type)}
        type={param.type}
      />
    </ScrollView>
  );
};

export default FastViewScreen;
