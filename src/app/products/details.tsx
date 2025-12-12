import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DetalisProductsScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black font-bold text-xl">
        Detalis Product screen {params.id}
      </Text>
    </View>
  );
};

export default DetalisProductsScreen;
