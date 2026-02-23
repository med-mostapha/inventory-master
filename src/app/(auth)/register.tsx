import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import NetInfo from "@react-native-community/netinfo";
import { api } from "@/utils/api";
import ImageView from "@/components/onboarding/ImageView";

interface RegisterResponse {
  id: number;
  username: string;
  email?: string | null;
  phone?: string | null;
}

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Logic: Clear error after 5 seconds ---
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleRegister = async () => {
    setError(null);
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUsername || !trimmedEmail || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      setError("No internet connection.");
      return;
    }

    try {
      setLoading(true);
      await api.post<RegisterResponse>(
        "/register/",
        { username: trimmedUsername, email: trimmedEmail, password },
        { timeout: 10000 },
      );
      router.replace("/(auth)/login");
    } catch (err: any) {
      if (err.code === "ECONNABORTED") {
        setError("Request timeout. Try again.");
      } else if (err.response) {
        const status = err.response.status;
        if (status === 409) setError("Username or email already exists.");
        else if (status >= 500) setError("Server error. Please try later.");
        else setError("Registration failed. Check your data.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const imgSource = require("../../../assets/auth/register.png");

  const styles = {
    input:
      "bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mb-4 text-black dark:text-white",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-gray-50 dark:bg-gray-950"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="px-6 py-10">
          {/* Illustration */}
          <View className="items-center mb-8">
            <ImageView imgSource={imgSource} width={220} height={160} />
          </View>

          {/* Heading */}
          <View className="mb-8 flex items-center">
            <Text className="text-4xl font-bold text-black dark:text-white text-center">
              Join Us
            </Text>
            <Text className="text-gray-500 dark:text-gray-400 mt-2 text-center">
              Create an account to get started
            </Text>
          </View>

          {/* Form Card */}
          <View className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm shadow-gray-200">
            <TextInput
              placeholder="Username"
              placeholderTextColor="#9ca3af"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              className={styles.input}
            />

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              className={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className={styles.input}
            />

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#9ca3af"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              className={styles.input}
            />

            {error && (
              <Text className="text-red-500 mb-4 text-center font-medium">
                {error}
              </Text>
            )}

            <Pressable
              onPress={handleRegister}
              disabled={loading}
              className="bg-blue-600 p-4 rounded-xl items-center mt-2"
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-white font-semibold text-base">
                  Create Account
                </Text>
              )}
            </Pressable>
          </View>

          {/* Footer */}
          <View className="mt-8">
            <Text className="text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/(auth)/login"
                className="text-blue-600 font-semibold"
                dismissTo
              >
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
