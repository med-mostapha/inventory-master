import Button from "@/components/Button";
import ImageView from "@/components/onboarding/ImageView";
import NavPoint from "@/components/onboarding/NavPoint";
import TextTemplate from "@/components/onboarding/TextTemplate";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

export default function OnboardingStepOne() {
  const router = useRouter();
  const imgSource = require("../../../assets/utils/step1.png");

  return (
    <View className="flex-1 bg-blue-500">
      <StatusBar barStyle="light-content" />

      {/* Gradient Background - Image Section */}
      <View className="flex-[0.5] bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-end pb-12">
        <View className=" backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <ImageView imgSource={imgSource} width={280} height={240} />
        </View>
      </View>

      {/* Content Card Section */}
      <View className="flex-[0.5] bg-white rounded-t-[40px] shadow-2xl">
        <View className="flex-1 px-8 pt-12 pb-8 justify-between">
          {/* Text Content */}
          <TextTemplate
            title="Suivi des stocks simplifié"
            body="Recevez des alertes pour les produits en rupture de stock et visualisez instantanément les niveaux de vos stocks."
          />

          {/* Navigation Points */}
          <View className="items-center py-6">
            <NavPoint total={3} active={1} />
          </View>

          {/* Action Buttons */}
          <View className="gap-3 px-4 mb-12">
            <Button
              title="Suivant"
              onPress={() => router.push("/(onboarding)/step2")}
              // variant="primary"
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
