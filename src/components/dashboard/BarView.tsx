import { useColorScheme } from "nativewind";
import { Dimensions, View } from "react-native";
// 1. Import BarChart instead of LineChart
import { BarChart } from "react-native-chart-kit";
import colors from "tailwindcss/colors";

type BarViewParams = {
  rawData: {
    category: string;
    total_value: number;
  }[];
};

const BarView = ({ rawData }: BarViewParams) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  // 2. Map the data for the chart
  const data = {
    labels: rawData.map((item) => item.category),
    datasets: [
      {
        data: rawData.map((item) => item.total_value),
      },
    ],
  };

  return (
    <View className="pl-2">
      <View className="rounded-xl">
        <BarChart
          data={data}
          width={Dimensions.get("window").width - 16} // Adjusted for padding
          height={230}
          yAxisLabel=""
          yAxisSuffix=""
          fromZero={true} // Recommended for Bar Charts to show scale accurately
          chartConfig={{
            backgroundColor: "#1E6DC9",
            backgroundGradientFrom: isDark ? colors.gray[800] : "#fff",
            backgroundGradientTo: isDark ? colors.gray[800] : "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) =>
              isDark
                ? `rgba(14, 144, 255, ${opacity})`
                : `rgba(10, 100, 255, ${opacity})`,
            labelColor: (opacity = 1) =>
              isDark
                ? `rgba(255, 255, 255, ${opacity})`
                : `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            // barPercentage: 0.5, // Optional: adjusts width of bars
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          verticalLabelRotation={0} // Change this if labels are too long
        />
      </View>
    </View>
  );
};

export default BarView;
