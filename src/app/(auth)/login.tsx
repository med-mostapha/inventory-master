import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "@/utils/api";
import { LoginRequest, LoginResponse, ApiErrorResponse } from "@/types/auth";
import { isAuthenticated } from "@/utils/auth";

export default function LoginScreen() {
  const [form, setForm] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      if (await isAuthenticated()) {
        router.replace("/(tabs)");
      }
    };
    checkLogin();
  }, []);

  const handleChange = (key: keyof LoginRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await api.post<LoginResponse>("/login/", form);

      const token = response.data.token;

      await AsyncStorage.setItem("auth_token", token);

      router.replace("/(tabs)");
    } catch (err: any) {
      const backendError: ApiErrorResponse = err.response?.data;
      setError(backendError?.error || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white dark:bg-gray-900"
    >
      <View className="flex-1 justify-center px-6">
        <Text className="text-3xl font-bold mb-6 text-black dark:text-white">
          Login
        </Text>

        <TextInput
          placeholder="Username"
          value={form.username}
          onChangeText={(text) => handleChange("username", text)}
          autoCapitalize="none"
          className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg mb-4 text-black dark:text-white"
        />

        <TextInput
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg mb-4 text-black dark:text-white"
        />

        {error && (
          <Text className="text-red-500 mb-4 text-center">{error}</Text>
        )}

        <Pressable
          onPress={handleLogin}
          disabled={loading}
          className="bg-blue-500 p-4 rounded-lg items-center"
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-semibold">Sign In</Text>
          )}
        </Pressable>

        <View className="mt-6">
          <Text className="text-center text-black dark:text-white">
            Don’t have an account?{" "}
            <Link href="/(auth)/register" className="text-blue-600">
              Create Account
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
