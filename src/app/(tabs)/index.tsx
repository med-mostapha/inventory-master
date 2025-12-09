import SummaryCard from "@/src/components/dashboard/SummaryCard";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex">
      {/* <Text className=" text-2xl font-bold">Dashboard home Screen</Text> */}
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </View>
  );
}
