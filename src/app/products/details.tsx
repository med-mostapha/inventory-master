import { products } from "@/src/data/products";
import { Product } from "@/src/types/product";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, Animated, Image, ScrollView, Text, View } from "react-native";
import PrButton from "./PrButton";

const DetalisProductsScreen = () => {
  // const testimageurl = require("../../../assets/products/test.jpg");
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
    <ScrollView className="flex-1  bg-white/80  ">
      <View className="w-full aspect-square  overflow-hidden relative">
        {loading && (
          <Animated.View
            style={{ opacity: pulseAnim }}
            className="absolute inset-0 bg-gray-300 "
          />
        )}

        <Image
          source={{ uri: `${item.image}800` }}
          className="w-full h-full "
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
      <View className="p-4 my-3 bg-white rounded-2xl shadow-sm gap-4">
        {/*  Info */}
        <View className="gap-1">
          <Text className="text-2xl font-bold text-zinc-900">{item.name}</Text>
          <Text className="text-zinc-500 leading-5">{item.description}</Text>
        </View>

        <View className="h-[1px] bg-zinc-200" />

        <View className="gap-2">
          {/* Date */}

          <View className="flex-row justify-between my-1">
            <Text className="text-zinc-600">Create At</Text>
            <Text className="">
              {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {", "}
              <Text>{new Date(item.updatedAt).toLocaleTimeString()}</Text>
            </Text>
          </View>

          <View className="flex-row justify-between my-1">
            <Text className="text-zinc-600">Last Update</Text>
            <Text>
              {new Date(item.createdAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {", "}
              <Text>{new Date(item.createdAt).toLocaleTimeString()}</Text>
            </Text>
          </View>

          <View className="flex-row justify-between my-1">
            <Text className="text-zinc-600">Category</Text>
            <Text className="font-semibold text-zinc-900">
              {item.categoryName}
            </Text>
          </View>

          {/* Price Quantity */}
          <View className="flex-row justify-between my-1">
            <Text className="text-zinc-600">Quantity</Text>
            <View
              className={`${item.quantity <= 5 ? "text-red-500" : "text-zinc-900"} font-semibold flex flex-row `}
            >
              {item.quantity <= 5 && (
                <View className="flex flex-row gap-2 items-center ">
                  <Ionicons name="warning-sharp" size={14} color={"orange"} />

                  <Text className="text-red-500 font-medium pr-5">
                    Low Stock
                  </Text>
                </View>
              )}
              <Text className={`${item.quantity <= 5 ? "text-red-500" : ""}`}>
                {item.quantity}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-zinc-600">Price / unit</Text>
            <Text className="font-semibold text-zinc-900">
              {item.price} MRU
            </Text>
          </View>

          <View className="flex-row justify-between mt-2 pt-2 border-t border-zinc-100">
            <Text className="text-base font-semibold text-zinc-800">Total</Text>
            <Text className="text-lg font-bold text-green-600">
              {(item.price * item.quantity).toFixed(2)} MRU
            </Text>
          </View>
        </View>
      </View>
      {/* Action */}
      <View className="flex flex-row gap-2 px-2 mb-20">
        <PrButton
          title="Edit"
          onPress={() => {
            router.push({
              pathname: "/products/edit",
              params: { id: params.id },
            });
          }}
        />
        <PrButton
          title="delete"
          thems={"delete"}
          onPress={() => {
            Alert.alert(
              "Delete",
              `delete product ${item.name}`,
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "delete",
                  onPress: () => router.back(),
                  style: "destructive",
                },
              ],
              { cancelable: true }
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DetalisProductsScreen;
