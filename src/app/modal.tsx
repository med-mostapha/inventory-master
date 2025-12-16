import React from "react";
import { View } from "react-native";
import List from "../components/ui/List";
import { analytics } from "../utils/detailedAnalysis";

const modal = () => {
  return (
    <View className="flex-1">
      <List title={"Low products list"} data={analytics.LowProductsStock} />
    </View>
  );
};

export default modal;
