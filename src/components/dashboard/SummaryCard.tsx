import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {};

const SummaryCard = () => {
  return (
    <View className="bg-white w-[45%] rounded-2xl  flex flex-row items-center justify-between p-4 ">
      <Ionicons
        name="shapes"
        size={24}
        className="bg-gray-300  p-2 rounded-full"
      />
      <View>
        <Text>45.66%</Text>
        <Text>Current Jobs</Text>
      </View>
    </View>
  );
};

export default SummaryCard;
