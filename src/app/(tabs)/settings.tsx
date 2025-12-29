import { useTheme } from "@/src/contexts/ThemeContext";
import { Pressable, Text, View } from "react-native";

export default function SettingsScreen() {
  const { mode, setMode } = useTheme();

  const themeOptions: ("light" | "dark" | "system")[] = [
    "light",
    "dark",
    "system",
  ];

  return (
    <View className="flex-1  bg-white-[0.7] dark:bg-gray-900 p-6 ">
      <Text className="text-2xl font-bold text-black dark:text-white mb-6">
        Theme
      </Text>
      <View className="flex-row justify-around items-center bg-white elevation-lg shadow-black   dark:bg-gray-800 p-4 rounded-xl">
        {themeOptions.map((option) => {
          const isActive = mode === option;
          return (
            <Pressable
              key={option}
              onPress={() => setMode(option)}
              className={`
              flex-col justify-between items-center rounded-full border-[0.5px] border-gray-600
              p-4  mb-3 w-[25%]
              ${isActive ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-800"}
            `}
            >
              <Text
                className={`
                text-sm font-medium
                ${isActive ? "text-white" : "text-black dark:text-white"}
              `}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Text>
              {/* {isActive && <Text className="text-white font-bold">✓</Text>} */}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
