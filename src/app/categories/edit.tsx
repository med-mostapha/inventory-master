import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const EditCategoriesScreen = () => {
  const param = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black font-bold text-xl">
        edit categories {param.id} screen
      </Text>
    </View>
  );
};

export default EditCategoriesScreen;
