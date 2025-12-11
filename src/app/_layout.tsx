import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </SafeAreaProvider>
  );
}
