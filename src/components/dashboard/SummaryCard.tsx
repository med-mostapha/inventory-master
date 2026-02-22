import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  result: number;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  color?: string;
  unit?: string;
  size?: number;
};

const SummaryCard = ({
  title,
  result,
  iconName,
  onPress,
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

  const formater = (num: number) => {
    return new Intl.NumberFormat("fr-MR").format(num);
  };

  const isAlert = title === "Low Stock" && result > 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      // replace w-5/12 flex-grow  by  basis-[48%]
      className="bg-white dark:bg-gray-800  basis-[48%] rounded-2xl flex flex-row items-center justify-between px-6 py-5 elevation-lg shadow-sm"
    >
      <Ionicons
        name={iconName}
        size={size}
        color={color}
        className="bg-gray-100 dark:bg-white/10  p-2 rounded-full"
      />
      <View className="flex items-end">
        <View className="flex flex-row gap-1 ">
          <Text className="text-2xl dark:text-white ">
            {unit === "MRU" ? formater(displayValue) : displayValue}
          </Text>
          {unit && <Text className="text-zinc-500">{unit}</Text>}
        </View>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SummaryCard;
