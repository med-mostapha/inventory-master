import React from "react";
import { View } from "react-native";
import LowStockList from "../components/dashboard/LowStockList";
import { analytics } from "../utils/detailedAnalysis";

const modal = () => {
  return (
    <View className="flex-1">
      <LowStockList
        title={"Low products list"}
        data={analytics.LowProductsStock}
      />
    </View>
  );
};

export default modal;
