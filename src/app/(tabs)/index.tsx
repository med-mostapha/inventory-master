import CharView from "@/src/components/dashboard/CharView";
import Header from "@/src/components/dashboard/Header";
import SummaryCard from "@/src/components/dashboard/SummaryCard";
import { enListTypes } from "@/src/types/enums";
import { analytics } from "@/src/utils/detailedAnalysis";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Index() {
  //   const formatted = new Intl.NumberFormat("de-DE").format();
  // console.log(formatted); // 3.433.442
  return (
    <ScrollView className=" bg-white/80">
      {/* Header */}
      <Header />
      {/* <Text className=" text-2xl font-bold">Dashboard home Screen</Text> */}
      <View className="flex-row flex-wrap gap-3">
        <SummaryCard
          title={"Products"}
          result={analytics.totalProducts}
          iconName={"cube-outline"}
          color={colors.violet[600]}
          onPress={() =>
            router.push({
              pathname: "/fastview",
              params: { type: enListTypes.Products },
            })
          }
        />
        <SummaryCard
          title={"Categoris"}
          result={analytics.totalCategories}
          iconName={"pricetags-outline"}
          color={colors.stone[600]}
          onPress={() =>
            router.push({
              pathname: "/fastview",
              params: { type: enListTypes.Categories },
            })
          }
        />
        {/* <ion-icon name="invert-mode-outline"></ion-icon> */}
        <SummaryCard
          title={"Total stock"}
          result={analytics.totalStock}
          iconName={"invert-mode-outline"}
          color={colors.orange[400]}
          onPress={() =>
            router.push({
              pathname: "/fastview",
              params: { type: enListTypes.TotalStock },
            })
          }
        />
        <SummaryCard
          title={"Low stock"}
          result={analytics.lowStockCount}
          iconName={"trending-down-sharp"}
          color={colors.red[500]}
          onPress={() =>
            router.push({
              pathname: "/fastview",
              params: { type: enListTypes.LowStockProducts },
            })
          }
        />
        <SummaryCard
          title={"Total price of products "}
          result={analytics.totalPrice}
          iconName={"cash-outline"}
          color={colors.green[600]}
          unit={"MRU"}
          onPress={() =>
            router.push({
              pathname: "/fastview",
              params: { type: enListTypes.TotalPriceList },
            })
          }
        />
      </View>
      {/* Chart */}

      <ScrollView horizontal className="mt-4">
        <CharView />
      </ScrollView>

      {/* Low List */}
      {/* <View className="shadow-xl shadow-black/10">
        <LowStockList
          title={"Low Quantity Pruducts"}
          data={analytics.LowProductsStock}
        />
      </View> */}
    </ScrollView>
  );
}
