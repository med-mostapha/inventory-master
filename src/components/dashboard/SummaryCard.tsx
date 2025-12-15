import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

type Props = {
  title: string;
  result: number;
  iconName: keyof typeof Ionicons.glyphMap;
  color?: string;
  unit?: string;
  size?: number;
};

const SummaryCard = ({
  title,
  result,
  iconName,
  unit = "",
  color = "gray",
  size = 24,
}: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: result,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [result]);

  useEffect(() => {
    const listener = animatedValue.addListener(({ value }) => {
      setDisplayValue(Math.floor(value));
    });

    return () => {
      animatedValue.removeListener(listener);
    };
  }, []);

  return (
    <View className="bg-white w-5/12 flex-grow rounded-2xl flex flex-row items-center justify-between px-6 py-5 shadow-inner shadow-gray-200">
      <Ionicons
        name={iconName}
        size={size}
        color={color}
        className="bg-gray-100  p-2 rounded-full"
      />
      <View className="flex items-center">
        <View className="flex flex-row gap-1">
          <Text className="text-2xl">{displayValue}</Text>
          {unit && <Text className="text-zinc-500">{unit}</Text>}
        </View>
        <Text className="text-sm text-gray-500">{title}</Text>
      </View>
    </View>
  );
};

export default SummaryCard;
