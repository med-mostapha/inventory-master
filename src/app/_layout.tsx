import { Stack, router, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CategorieProvider } from "../contexts/CategoriesContext";
import { useColorScheme } from "nativewind";
import colors from "tailwindcss/colors";
import { ThemeProvider } from "../contexts/ThemeContext";
import { isAuthenticated } from "@/utils/auth";
import "../global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const [loading, setLoading] = useState(true);
  const segments = useSegments();

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      const inAuthGroup = segments[0] === "(auth)";

      if (!authenticated && !inAuthGroup) {
        router.replace("/(auth)/login");
      }

      if (authenticated && inAuthGroup) {
        router.replace("/(tabs)");
      }

      setLoading(false);
    };

    checkAuth();
  }, [segments]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  //   return (
  //     <CategorieProvider>
  //       <SafeAreaProvider>
  //         <ThemeProvider>
  //           <StatusBar />
  //           <Stack
  //             screenOptions={{
  //               animation: "slide_from_right",
  //               headerTitleAlign: "center",
  //               headerStyle: {
  //                 backgroundColor: isDark ? colors.gray[800] : "white",
  //               },
  //               headerShown: false,
  //               headerTintColor: isDark ? "white" : "",
  //             }}
  //           >
  //             <Stack.Screen name="(tabs)" />
  //             <Stack.Screen name="(auth)/login" />
  //             <Stack.Screen name="(onboarding)/index" />
  //             <Stack.Screen name="(onboarding)/step1" />
  //             <Stack.Screen name="(onboarding)/step2" />

  //             {/* Keep your modals here exactly as before */}
  //             <Stack
  //               screenOptions={{
  //                 animation: "slide_from_right",
  //                 headerTitleAlign: "center",
  //                 headerStyle: {
  //                   backgroundColor: isDark ? colors.gray[800] : "white",
  //                 },
  //                 headerShown: false,
  //                 headerTintColor: isDark ? "white" : "",
  //                 contentStyle: {
  //                   backgroundColor: "",
  //                 },
  //               }}
  //             >
  //               <Stack.Screen name="(tabs)" options={{ title: "Add Product" }} />
  //               {/* Products */}
  //               <Stack.Screen
  //                 name="products/add"
  //                 options={{
  //                   title: "Add Product",
  //                   presentation: "modal",
  //                   headerShown: true,
  //                 }}
  //               />
  //               <Stack.Screen
  //                 name="products/edit"
  //                 options={{
  //                   title: "Edit Product",
  //                   presentation: "modal",
  //                   headerShown: true,
  //                 }}
  //               />
  //               <Stack.Screen
  //                 name="products/details"
  //                 options={({ route }) => ({
  //                   title: (route.params as any)?.name ?? "Details",

  //                   headerShown: true,
  //                 })}
  //               />

  //               {/* Categories */}
  //               <Stack.Screen
  //                 name="categories/add"
  //                 options={{
  //                   title: "Add Category",
  //                   presentation: "modal",
  //                   headerShown: true,
  //                 }}
  //               />

  //               <Stack.Screen
  //                 name="categories/edit"
  //                 options={{
  //                   title: "Add Category",
  //                   presentation: "modal",
  //                   headerShown: true,
  //                 }}
  //               />
  //               <Stack.Screen
  //                 name="fastview"
  //                 options={{
  //                   presentation: "modal",
  //                   animation: "fade",
  //                   headerShown: true,
  //                   contentStyle: {
  //                     backgroundColor: "#121212",
  //                   },
  //                 }}
  //               />

  //               <Stack.Screen
  //                 name="(onboarding)/index"
  //                 options={{
  //                   headerShown: false,
  //                   animation: "none",
  //                 }}
  //               />

  //               <Stack.Screen
  //                 name="(onboarding)/step1"
  //                 options={{
  //                   headerShown: false,
  //                   animation: "none",
  //                 }}
  //               />

  //               <Stack.Screen
  //                 name="(onboarding)/step2"
  //                 options={{
  //                   headerShown: false,
  //                   animation: "none",
  //                 }}
  //               />
  //             </Stack>
  //           </Stack>
  //         </ThemeProvider>
  //       </SafeAreaProvider>
  //     </CategorieProvider>

  // );
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
            }}
          >
            {/* Main Groups */}
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(auth)/login" />

            {/* Onboarding */}
            <Stack.Screen
              name="(onboarding)/index"
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="(onboarding)/step1"
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="(onboarding)/step2"
              options={{ animation: "none" }}
            />

            {/* Modals & Details */}
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
                title: "Edit Category",
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
                contentStyle: { backgroundColor: "#121212" },
              }}
            />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
    </CategorieProvider>
  );
}
