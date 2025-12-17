import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import List from "../components/ui/List";
import { analytics } from "../utils/detailedAnalysis";
// totalPriceList  lowStockList  totalStockList categoris products

const modal = () => {
  const param = useLocalSearchParams<{ type: string }>();
  return (
    <ScrollView className="flex-1 mb-10">
      <List title={"List"} data={analytics.getList(param.type)} />
      <Text>{param.type ?? "dedi"}</Text>
    </ScrollView>
  );
};

export default modal;
