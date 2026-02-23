import { useTheme } from "@/contexts/ThemeContext";
import { Pressable, Text, View, Alert } from "react-native";
import { router } from "expo-router";
import { removeToken } from "@/utils/auth";

export default function SettingsScreen() {
  const { mode, setMode } = useTheme();

  const themeOptions: ("light" | "dark" | "system")[] = [
    "light",
    "dark",
    "system",
  ];

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await removeToken();
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
      {/* ===== THEME SECTION ===== */}
      <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
        Appearance
      </Text>

      <View className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm">
        {themeOptions.map((option, index) => {
          const isActive = mode === option;

          return (
            <Pressable
              key={option}
              onPress={() => setMode(option)}
              className={`flex-row items-center justify-between px-5 py-4 ${
                index !== themeOptions.length - 1
                  ? "border-b border-gray-200 dark:border-gray-800"
                  : ""
              }`}
            >
              <Text className="text-base text-black dark:text-white capitalize">
                {option}
              </Text>

              {isActive && (
                <View className="w-3 h-3 rounded-full bg-blue-500" />
              )}
            </Pressable>
          );
        })}
      </View>

      {/* ===== LOGOUT SECTION ===== */}
      <View className="mt-10">
        <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
          Account
        </Text>

        <Pressable
          onPress={handleLogout}
          className="bg-white dark:bg-gray-800 px-5 py-4 rounded-2xl"
        >
          <Text className="text-red-500 font-semibold">Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
