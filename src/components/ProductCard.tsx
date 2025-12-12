import { Product } from "@/src/types/product";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <TouchableOpacity
      className="bg-white p-1 mt-2 max-w-[50%] rounded-2xl elevation-md shadow-md shadow-black/15"
      onPress={() =>
        router.push({
          pathname: "/products/details",
          params: { id: product.id },
        })
      }
    >
      <Image
        source={{ uri: product.image }}
        className="w-full aspect-square rounded-xl"
        width={180}
        height={180}
        resizeMode="cover"
      />
      <View className="p-1">
        <View className="py-2 flex flex-col gap-2">
          <Text className="font-bold text-black/80">{product.name}</Text>
          <Text className="text-sm text-gray-500">{product.description}</Text>
        </View>
        <View className="flex flex-end">
          <Text className=" text-black/80">quantity : {product.quantity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
