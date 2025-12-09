import Button from "@/src/components/Button";
import ImageView from "@/src/components/onboarding/ImageView";
import NavPoint from "@/src/components/onboarding/NavPoint";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function OnboardingIndex() {
  const imgSource = require("../../../assets/utils/image.png");
  return (
    <View className="flex-1  bg-[#263a96c4]">
      <View className="flex-[0.45] items-center justify-center">
        <ImageView imgSource={imgSource} width={300} height={190} />
      </View>
      <View className="bg-[#FFFFFF] flex-[0.55] rounded-t-[50px] ">
        <View className="  flex-[0.4] items-center   text-center justify-center gap-6 mt-12">
          <Text className="text-blue-800 text-3xl font-bold">
            Bienvenue à Inventory Master
          </Text>
          <Text className="text-[#9586A8] text-center mx-4">
            Gérez facilement tous vos produits et catégories depuis votre
            application mobile. Suivez vos stocks en temps réel et simplifiez
            votre inventaire.
          </Text>
        </View>

        <View className="flex-[0.6] items-center justify-center gap-1">
          <NavPoint total={3} active={0} />

          <Button
            title="Next"
            onPress={() => router.push("/(onboarding)/step1")}
          />
        </View>
      </View>
    </View>
  );
}
