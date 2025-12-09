import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  title: string;
  result: number;
  color?: string;
  iconName: keyof typeof Ionicons.glyphMap;
  avrege?: boolean;
  size?: number;
};

const SummaryCard = ({
  title,
  result,
  iconName,
  color = "gray",
  avrege = false,
  size = 30,
}: Props) => {
  return (
    <View className="bg-white w-5/12 flex-grow m-1  rounded-2xl flex flex-row items-center justify-between p-6 shadow-sm shadow-gray-300">
      <Ionicons
        name={iconName}
        size={size}
        color={color}
        className="bg-gray-100  p-2 rounded-full"
      />
      <View>
        <Text className="text-2xl">{avrege ? result + "%" : result}</Text>
        <Text className="text-sm text-gray-500">{title}</Text>
      </View>
    </View>
  );
};

export default SummaryCard;
