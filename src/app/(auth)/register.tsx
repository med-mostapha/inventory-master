import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";

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

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Username and password are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("YOUR_BASE_URL/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data: RegisterResponse = await response.json();

      if (!response.ok) {
        Alert.alert("Error", "Registration failed");
        return;
      }

      Alert.alert("Success", "Account created successfully");
      router.replace("/(auth)/login");
    } catch (error) {
      Alert.alert("Error", "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white dark:bg-gray-900">
      <Text className="text-3xl font-bold mb-6 text-black dark:text-white">
        Register
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border p-4 rounded-lg mb-4 text-black dark:text-white"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-4 rounded-lg mb-4 text-black dark:text-white"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="border p-4 rounded-lg mb-4 text-black dark:text-white"
      />

      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border p-4 rounded-lg mb-6 text-black dark:text-white"
      />

      <Pressable
        onPress={handleRegister}
        disabled={loading}
        className="bg-blue-500 p-4 rounded-lg items-center"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-semibold">Create Account</Text>
        )}
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)/login")} className="mt-4">
        <Text className="text-center text-blue-500">
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
}
