import CharView from "@/src/components/dashboard/CharView";
import Header from "@/src/components/dashboard/Header";
import LowStockList from "@/src/components/dashboard/LowStockList";
import SummaryCard from "@/src/components/dashboard/SummaryCard";
import { data } from "@/src/utils/detailedAnalysis";
import { ScrollView, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Index() {
  return (
    <ScrollView className="py-1 bg-white/80">
      {/* Header */}
      <Header />
      {/* <Text className=" text-2xl font-bold">Dashboard home Screen</Text> */}
      <View className="flex-row flex-wrap gap-3">
        <SummaryCard
          title={"Products"}
          result={data.totalProducts}
          iconName={"file-tray-stacked-outline"}
          color={colors.sky[600]}
        />
        <SummaryCard
          title={"Gategoris"}
          result={data.totalGategoris}
          iconName={"pricetags-outline"}
          color={colors.green[600]}
        />

        <SummaryCard
          title={"Total stock"}
          result={data.totalStock}
          iconName={"arrow-back-outline"}
          color="red"
        />
        <SummaryCard
          title={"Low stock"}
          result={data.lowStockCount}
          iconName={"trending-down-outline"}
          color={colors.red[500]}
        />
        <SummaryCard
          title={"Total products prices"}
          result={data.totalPrice}
          iconName={"trending-down-outline"}
          color={colors.red[500]}
          unit={"MRU"}
        />
      </View>
      {/* Chart */}

      <View className="mt-4">
        <CharView />
      </View>

      {/* Low List */}
      <View className="shadow-xl shadow-black/10">
        <LowStockList />
        <LowStockList />
      </View>
    </ScrollView>
  );
}
