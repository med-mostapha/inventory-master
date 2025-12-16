import { Stack, useRouter } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Stack
        screenOptions={{
          headerShown: true,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="products/add"
          options={{ headerShown: true, title: "Add Product" }}
        />
        <Stack.Screen
          name="products/edit"
          options={{ headerShown: true, title: "Edit Product" }}
        />
        <Stack.Screen
          name="products/details"
          options={{ headerShown: true, title: "Product Detalis" }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "lowlist" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
