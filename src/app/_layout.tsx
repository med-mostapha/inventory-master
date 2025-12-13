import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          headerLeft: () => (
            <TouchableOpacity className="" onPress={() => router.back()}>
              <Ionicons className="mr-3" name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="products/add"
          options={{ headerShown: true, title: "Add Product" }}
        />
        <Stack.Screen
          name="products/details"
          options={{ headerShown: true, title: "Product Detalis" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
