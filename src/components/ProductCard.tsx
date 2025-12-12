import { Product } from "@/src/types/product";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <TouchableOpacity
      className="bg-white w-[49%] h-40 mt-2 p-4 rounded-2xl elevation-md shadow-md shadow-black/15"
      onPress={() =>
        router.push({
          pathname: "/products/details",
          params: { id: product.id },
        })
      }
    >
      <Image
        source={{ uri: product.image }}
        // className="w-full aspect-square"
        width={100}
        height={100}
        resizeMode="cover"
      />
      <Text className="">{product.name}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
