import Button from "@/src/components/Button";
import ImageView from "@/src/components/onboarding/ImageView";
import NavPoint from "@/src/components/onboarding/NavPoint";
import TextTemplate from "@/src/components/onboarding/TextTemplate";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

export default function OnboardingStepTwo() {
  const router = useRouter();
  const imgSource = require("../../../assets/utils/step2.png");

  return (
    <View className="flex-1 bg-blue-500">
      <StatusBar barStyle="light-content" />

      {/* Gradient Background - Image Section */}
      <View className="flex-[0.5] bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-end pb-12">
        <View className=" backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <ImageView imgSource={imgSource} width={300} height={200} />
        </View>
      </View>

      {/* Content Card Section */}
      <View className="flex-[0.5] bg-white rounded-t-[40px] shadow-2xl">
        <View className="flex-1 px-8 pt-12 pb-8 justify-between">
          {/* Text Content */}
          <TextTemplate
            title="Analyse et gestion complète"
            body="Accédez à des rapports détaillés, gérez vos catégories et produits, et prenez des décisions éclairées pour votre inventaire."
          />

          {/* Navigation Points */}
          <View className="items-center py-6">
            <NavPoint total={3} active={2} />
          </View>

          {/* Action Buttons */}
          <View className="gap-3 px-4 mb-12">
            <Button
              title="Commencer"
              onPress={() => router.replace("/(tabs)")}
              variant="primary"
            />
            <Button
              title="Retour"
              variant="secondary"
              onPress={() => router.back()}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
