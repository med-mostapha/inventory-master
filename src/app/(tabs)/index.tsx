import CharView from "@/components/dashboard/CharView";
import Header from "@/components/dashboard/Header";
import SummaryCard from "@/components/dashboard/SummaryCard";
import { enListTypes } from "@/types/enums";
import { analytics } from "@/utils/detailedAnalysis";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Index() {
  return (
    <ScrollView className="bg-white/80 dark:bg-gray-900">
      {/* Header */}
      <Header />
      <View className="flex-row flex-wrap gap-3 px-3">
        <SummaryCard
          title={"Products"}
          result={analytics.totalProducts}
          iconName={"cube-outline"}
          color={colors.fuchsia[600]}
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
          color={colors.teal[600]}
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

      <View className="flex mt-5">
        <Text className="text-bold text-black/80  dark:text-white ml-2 font-medium text-xl">
          Bezier Line Chart
        </Text>
        <ScrollView horizontal className="mt-4">
          <CharView />
        </ScrollView>
      </View>

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
