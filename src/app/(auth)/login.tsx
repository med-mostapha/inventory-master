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
import NetInfo from "@react-native-community/netinfo";
import { api } from "@/utils/api";
import { LoginRequest, LoginResponse, ApiErrorResponse } from "@/types/auth";
import { isAuthenticated } from "@/utils/auth";
import ImageView from "@/components/onboarding/ImageView";

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

  // Clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (key: keyof LoginRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = async () => {
    setError(null);

    if (!form.username.trim() || !form.password.trim()) {
      setError("Username and password are required.");
      return;
    }

    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      setError("No internet connection. Please check your network.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post<LoginResponse>("/login/", form, {
        timeout: 10000, // 10 seconds
      });

      const token = response.data.token;

      await AsyncStorage.setItem("auth_token", token);
      router.replace("/(tabs)");
    } catch (err: any) {
      if (err.code === "ECONNABORTED") {
        setError("Request timeout. Server is not responding.");
      } else if (err.response) {
        // Server responded with status
        const status = err.response.status;

        if (status === 400) {
          setError("Invalid input. Please check your credentials.");
        } else if (status === 401) {
          setError("Incorrect username or password.");
        } else if (status >= 500) {
          setError("Server error. Please try again later.");
        } else {
          setError("Unexpected error occurred.");
        }
      } else if (err.request) {
        // Request made but no response
        setError("Unable to reach server.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const imgSource = require("../../../assets/auth/login.png");

  const styles = {
    input:
      "bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mb-4 text-black dark:text-white",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-gray-50 dark:bg-gray-950"
    >
      <View className="flex-1 justify-center px-6">
        {/* Illustration */}
        <View className="items-center mb-10">
          <ImageView imgSource={imgSource} width={240} height={180} />
        </View>

        {/* Heading */}
        <View className="mb-8 flex items-center">
          <Text className="text-4xl font-bold text-black dark:text-white">
            Welcome Back
          </Text>
          <Text className="text-gray-500 dark:text-gray-400 mt-2">
            Sign in to manage your inventory
          </Text>
        </View>

        {/* Form Card */}
        <View className="bg-white dark:bg-gray-900 rounded-3xl p-6 ">
          <TextInput
            placeholder="Username"
            placeholderTextColor="#9ca3af"
            value={form.username}
            onChangeText={(text) => handleChange("username", text)}
            autoCapitalize="none"
            className={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
            className={styles.input}
          />

          {error && (
            <Text className="text-red-500 mb-4 text-center">{error}</Text>
          )}

          <Pressable
            onPress={handleLogin}
            disabled={loading}
            className="bg-blue-600 p-4 rounded-xl items-center mt-2"
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-semibold text-base">
                Sign In
              </Text>
            )}
          </Pressable>
        </View>

        {/* Footer */}
        <View className="mt-6">
          <Text className="text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/(auth)/register"
              className="text-blue-600 font-semibold"
            >
              Create Account
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
