import { Product } from "@/src/types/product";
import React, { useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = ({ product, onPress }: Props) => {
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
        duration: 900,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <TouchableOpacity
      className="bg-white p-2 mb-2 w-1/2 rounded-2xl shadow-inner shadow-black/15"
      onPress={onPress}
    >
      <View className="w-full aspect-square rounded-xl overflow-hidden relative">
        {loading && (
          <Animated.View
            style={{ opacity: pulseAnim }}
            className="absolute inset-0 bg-gray-200"
          />
        )}

        <Image
          source={{ uri: product.image }}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>

      <View className="mt-2 flex-1 justify-between">
        <View className="gap-1">
          <Text className="font-bold text-black/80" numberOfLines={1}>
            {product.name}
          </Text>
          <Text className="text-sm text-gray-500" numberOfLines={2}>
            {product.description}
          </Text>
        </View>

        <View className="mt-2">
          <Text className="text-sm font-semibold text-black/80">
            Quantity: {product.quantity}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
