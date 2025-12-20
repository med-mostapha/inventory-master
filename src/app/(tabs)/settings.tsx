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
    <View className="flex-1 bg-white dark:bg-black p-6">
      <Text className="text-2xl font-bold text-black dark:text-white mb-6">
        Theme
      </Text>

      {themeOptions.map((option) => {
        const isActive = mode === option;
        return (
          <Pressable
            key={option}
            onPress={() => setMode(option)}
            className={`
              flex-row justify-between items-center
              p-4 rounded-lg mb-3
              ${isActive ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-800"}
            `}
          >
            <Text
              className={`
                text-lg font-medium
                ${isActive ? "text-white" : "text-black dark:text-white"}
              `}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
            {isActive && <Text className="text-white font-bold">✓</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}
