import { useCallback, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useFocusEffect } from "expo-router";

import BarView from "@/components/dashboard/BarView";
import Header from "@/components/dashboard/Header";
import SummaryCard from "@/components/dashboard/SummaryCard";
import { api } from "@/utils/api";
import { DashboardResponse } from "@/types/dashboard";
import colors from "tailwindcss/colors";

export default function Index() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboard = async () => {
    try {
      const response = await api.get<DashboardResponse>("/dashboard/");

      setDashboard(response.data);
    } catch (error) {
      console.log("DASHBOARD ERROR:", error);
    }
  };

  // Auto refresh when screen gains focus
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const load = async () => {
        if (isActive) {
          setLoading(true);
          await fetchDashboard();
          setLoading(false);
        }
      };

      load();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDashboard();
    setRefreshing(false);
  };

  if (loading && !dashboard) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      className="bg-white/80 dark:bg-gray-900"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Header />

      <View className="flex-row flex-wrap gap-3 px-3">
        <SummaryCard
          title={"Total Products"}
          result={dashboard?.counts.total_products ?? 0}
          iconName={"cube-outline"}
          color={colors.fuchsia[600]}
        />

        <SummaryCard
          title={"Categories"}
          result={dashboard?.counts.total_categories ?? 0}
          iconName={"pricetags-outline"}
          color={colors.teal[600]}
        />

        <SummaryCard
          title={"Total Stock"}
          result={dashboard?.stock.total_stock ?? 0}
          iconName={"invert-mode-outline"}
          color={colors.orange[400]}
        />

        <SummaryCard
          title={"Low Stock"}
          result={dashboard?.counts.low_stock ?? 0}
          iconName={"trending-down-sharp"}
          color={colors.red[500]}
        />

        {/* <SummaryCard
          title={"ok"}
          result={0}
          iconName={"trending-down-sharp"}
          color={colors.red[500]}
        />

        <SummaryCard
          title={"Expired Products"}
          result={dashboard?.counts.expired_products ?? 0}
          iconName={"infinite"}
          color={colors.rose[500]}
        /> */}
        <SummaryCard
          title={"Total Inventory Value"}
          result={dashboard?.financial.total_inventory_value ?? 0}
          iconName={"cash-outline"}
          color={colors.green[600]}
          unit={"MRU"}
        />
      </View>

      <View className="flex mt-5">
        <Text className="text-black/80 dark:text-white ml-2 font-medium text-xl">
          Value by Category
        </Text>

        <ScrollView horizontal className="mt-4">
          <BarView rawData={dashboard?.analytics.value_by_category ?? []} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
