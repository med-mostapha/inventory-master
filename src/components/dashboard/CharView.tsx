import {
  categoriesLabels,
  categoriesStock,
} from "@/src/utils/detailedAnalysis";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const CharView = () => {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June"],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //     },
  //   ],
  // };
  return (
    <View className="my-3">
      <Text className="text-bold text-black/80 ml-2 font-medium text-xl">
        Bezier Line Chart
      </Text>
      <LineChart
        data={{
          labels: categoriesLabels,

          datasets: [
            {
              data: categoriesStock,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#1E6DC9",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0.8) => `rgba(10, 100, 250, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(10, 100, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#0284c7",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default CharView;
