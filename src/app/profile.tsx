import React from "react";
import { Text, View } from "react-native";

const ProfileInfo = () => {
  return (
    <View className="flex-[1/3] items-center justify-center">
      <View className="w-[50%] h-[50%] rounded-full flex items-center justify-center bg-slate-500">
        <Text>you</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
