import Button from "@/src/components/Button";
import ImageView from "@/src/components/onboarding/ImageView";
import NavPoint from "@/src/components/onboarding/NavPoint";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OnboardingStepOne() {
  const router = useRouter();
  const imgSource = require("../../../assets/utils/step1.png");
  return (
    <View className="flex-1  bg-[#263a96c4]">
      <View className="flex-[0.45] items-center justify-center">
        <ImageView imgSource={imgSource} width={280} height={240} />
      </View>
      <View className="bg-[#FFFFFF] flex-[0.55] rounded-t-[50px] ">
        <View className="  flex-[0.4] items-center   text-center justify-center gap-6 mt-12">
          <Text className="text-blue-800 text-3xl font-bold">
            Suivi des stocks simplifié
          </Text>
          <Text className="text-[#9586A8] text-center mx-4">
            Recevez des alertes pour les produits en rupture de stock et
            visualisez instantanément les niveaux de vos stocks.
          </Text>
        </View>

        <View className="flex-[0.7] items-center justify-center gap-1">
          <NavPoint total={3} active={1} />

          <Button
            title="Next"
            onPress={() => router.push("/(onboarding)/step2")}
          />
          <Button
            title="back"
            thems="second"
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
