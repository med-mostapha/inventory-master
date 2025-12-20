import {
  categoriesLabels,
  categoriesStock,
} from "@/src/utils/detailedAnalysis";
import { useColorScheme } from "nativewind";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "tailwindcss/colors";

const CharView = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <View className="">
      {/* <Text className="text-bold text-black/80  dark:text-white ml-2 font-medium text-xl">
        Bezier Line Chart
      </Text> */}
      <LineChart
        data={{
          labels: categoriesLabels,

          datasets: [
            {
              data: categoriesStock,
            },
          ],
        }}
        width={Dimensions.get("window").width + 30}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} //
        chartConfig={{
          backgroundColor: "#1E6DC9",
          backgroundGradientFrom: isDark ? colors.gray[800] : "trasparent",
          backgroundGradientTo: isDark ? colors.gray[800] : "#fff",
          decimalPlaces: 2, // optional
          color: (opacity = 0.8) =>
            `${isDark ? "rgba(14, 144, 255" : "rgba(10, 100, 255"}, ${opacity})`,
          labelColor: (opacity = 1) =>
            `${isDark ? "rgba(255, 255, 255" : "rgba(0, 0, 0"}, ${opacity})`,
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
