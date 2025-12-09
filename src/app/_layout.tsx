import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar />
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </React.Fragment>
  );
}
