import Header from "@/src/components/dashboard/Header";
import SummaryCard from "@/src/components/dashboard/SummaryCard";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* <Text className=" text-2xl font-bold">Dashboard home Screen</Text> */}
      <View className="flex-row flex-wrap space-x-2">
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
    </ScrollView>
  );
}
