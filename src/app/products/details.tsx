import { products } from "@/src/data/products";
import { Product } from "@/src/types/product";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Animated, Image, Text, View } from "react-native";

const DetalisProductsScreen = () => {
  const testimageurl = require("../../../assets/products/test.jpg");
  const params = useLocalSearchParams<{ id: string }>();
  const item: Product | undefined = products.find((p) => p.id === params.id);

  const [loading, setLoading] = useState(true);
  const pulseAnim = new Animated.Value(0.3);

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 0.3,
        duration: 1500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  if (item === undefined) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Product not found!</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 p-3 ">
      {/* <View className="flex items-center ">
        <Image
          className="rounded-md"
          resizeMode="cover"
          source={!item.image ? testimageurl : { url: `${item.image}800` }}
          width={400}
          height={350}
        />
      </View> */}
      <View className="w-full aspect-square rounded-xl overflow-hidden relative">
        {loading && (
          <Animated.View
            style={{ opacity: pulseAnim }}
            className="absolute inset-0 bg-gray-300 rounded-xl"
          />
        )}

        <Image
          source={{ uri: `${item.image}800` }}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>

      <View className="">
        <View className=" gap-2 mt-3">
          <Text className="text-xl font-semibold ">{item.name}</Text>
          <Text className="text-zinc-500">{item.description} </Text>
          <Text className="font-semibold mt-2">{item.price} MRU</Text>
        </View>

        <View className="h-[1px] bg-gray-300 my-3" />

        <View className=""></View>
      </View>
    </View>
  );
};

export default DetalisProductsScreen;
