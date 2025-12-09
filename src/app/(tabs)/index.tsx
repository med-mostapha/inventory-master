import SummaryCard from "@/src/components/dashboard/SummaryCard";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-row flex-wrap space-x-2">
      {/* <Text className=" text-2xl font-bold">Dashboard home Screen</Text> */}
      <SummaryCard
        title={"Total"}
        result={230}
        iconName={"car-outline"}
        color="blue"
      />
      <SummaryCard
        title={"Low price"}
        result={65}
        iconName={"play"}
        color="orange"
      />
      <SummaryCard
        title={"Total cars"}
        result={54}
        iconName={"information-circle-outline"}
        color="green"
      />
      <SummaryCard
        title={"Avrege "}
        result={87.78}
        avrege={true}
        iconName={"arrow-back-outline"}
        color="red"
      />
    </View>
  );
}
