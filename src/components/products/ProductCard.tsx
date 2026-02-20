import { Product } from "@/types/product";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = ({ product, onPress }: Props) => {
  const isLowStock = product.quantity <= product.min_threshold;

  return (
    <TouchableOpacity
      className="bg-white dark:bg-gray-800 p-3 mb-3 w-1/2 rounded-2xl shadow-sm"
      onPress={onPress}
    >
      <View className="gap-2">
        <Text
          className="font-bold text-black/80 dark:text-white text-base"
          numberOfLines={1}
        >
          {product.name}
        </Text>

        <Text className="text-sm font-semibold text-black/80 dark:text-gray-300">
          Price: {product.price} MRU
        </Text>

        <Text
          className={`text-sm font-semibold ${
            isLowStock
              ? "text-red-600 dark:text-red-500"
              : "text-black/80 dark:text-gray-100"
          }`}
        >
          Quantity: {product.quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
