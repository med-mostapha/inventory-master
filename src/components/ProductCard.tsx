import { Product } from "@/src/types/product";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = ({ product, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="bg-white p-2 mb-2 w-1/2 rounded-2xl shadow-inner shadow-black/15"
      onPress={onPress}
    >
      <Image
        source={{ uri: product.image }}
        className="w-full aspect-square rounded-xl"
        resizeMode="cover"
      />

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
