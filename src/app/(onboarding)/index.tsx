import Button from "@/components/Button";
import ImageView from "@/components/onboarding/ImageView";
import NavPoint from "@/components/onboarding/NavPoint";
import TextTemplate from "@/components/onboarding/TextTemplate";
import { router } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

export default function OnboardingIndex() {
  const imgSource = require("../../../assets/utils/image.png");

  return (
    <View className="flex-1 bg-blue-500">
      <StatusBar barStyle="light-content" />

      {/* Gradient Background - Image Section */}
      <View className="flex-[0.5] bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-end pb-12">
        <View className=" backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <ImageView imgSource={imgSource} width={300} height={190} />
        </View>
      </View>

      {/* Content Card Section */}
      <View className="flex-[0.5] bg-white rounded-t-[40px] shadow-2xl">
        <View className="flex-1 px-8 pt-12 pb-8 justify-between">
          {/* Text Content */}
          <TextTemplate
            title="Inventory Master!"
            body="Manage all your products and categories effortlessly from your mobile device. Keep track of your stock in real time and make inventory management simple and stress-free."
          />

          {/* Navigation Points */}
          <View className="items-center py-6">
            <NavPoint total={3} active={0} />
          </View>

          {/* Action Button */}
          <View className="px-4 mb-16 h-[25%]">
            <Button
              title="Get Started"
              onPress={() => router.push("/(onboarding)/step1")}
              variant="primary"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
