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
          animation: "slide_from_right",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "Add Product" }}
        />
        {/* Products */}
        <Stack.Screen
          name="products/add"
          options={{ title: "Add Product", presentation: "modal" }}
        />
        <Stack.Screen
          name="products/edit"
          options={{ title: "Edit Product" }}
        />
        <Stack.Screen
          name="products/details"
          options={({ route }) => ({
            title: (route.params as any)?.name ?? "Details",
            presentation: "modal",
          })}
        />

        {/* Categories */}
        <Stack.Screen
          name="categories/add"
          options={{ title: "Add Category" }}
        />

        <Stack.Screen
          name="fastview"
          options={{
            presentation: "modal",
            title: "List",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
