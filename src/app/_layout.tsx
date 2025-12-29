import { Stack, useRouter } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CategorieProvider } from "../contexts/CategoriesContext";

import { useColorScheme } from "nativewind";
import colors from "tailwindcss/colors";
import { ThemeProvider } from "../contexts/ThemeContext";
import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <CategorieProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar />
          <Stack
            screenOptions={{
              animation: "slide_from_right",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: isDark ? colors.gray[800] : "white",
              },
              headerShown: false,
              headerTintColor: isDark ? "white" : "",
              contentStyle: {
                backgroundColor: "",
              },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ title: "Add Product" }} />
            {/* Products */}
            <Stack.Screen
              name="products/add"
              options={{
                title: "Add Product",
                presentation: "modal",
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="products/edit"
              options={{
                title: "Edit Product",
                presentation: "modal",
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="products/details"
              options={({ route }) => ({
                title: (route.params as any)?.name ?? "Details",

                headerShown: true,
              })}
            />

            {/* Categories */}
            <Stack.Screen
              name="categories/add"
              options={{
                title: "Add Category",
                presentation: "modal",
                headerShown: true,
              }}
            />

            <Stack.Screen
              name="categories/edit"
              options={{
                title: "Add Category",
                presentation: "modal",
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="fastview"
              options={{
                presentation: "modal",
                animation: "fade",
                headerShown: true,
                contentStyle: {
                  backgroundColor: "#121212",
                },
              }}
            />

            <Stack.Screen
              name="(onboarding)/index"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />

            <Stack.Screen
              name="(onboarding)/step1"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />

            <Stack.Screen
              name="(onboarding)/step2"
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
    </CategorieProvider>
  );
}
