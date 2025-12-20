import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import colors from "tailwindcss/colors";

export default function TabsLayout() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: isDark ? colors.sky[500] : colors.blue[500],
        tabBarInactiveTintColor: "#999",
        headerTitleAlign: "center",
        headerTintColor: isDark ? "white" : "black",
        // headerShadowVisible: true,

        headerStyle: {
          backgroundColor: isDark ? colors.gray[800] : colors.gray[50],
        },
        tabBarStyle: {
          backgroundColor: isDark ? colors.gray[900] : "",
        },

        headerRight: () => (
          <Ionicons
            className="mr-3"
            name="notifications-outline"
            size={22}
            color={isDark ? "white" : "black"}
          />
        ),
      }}
    >
      {/* Dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Products */}
      <Tabs.Screen
        name="products/index"
        options={{
          title: "Products",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
        }}
      />

      {/* Categories */}
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />

      {/* Settings */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
