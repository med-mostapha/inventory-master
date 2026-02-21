import { Product } from "@/types/product";
import { api } from "@/utils/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}/`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleDelete = () => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(`/products/${id}/`);
              router.back();
            } catch (error) {
              console.error("Failed to delete product");
            }
          },
        },
      ],
    );
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Product not found</Text>
      </View>
    );
  }

  const isLowStock = product.quantity <= product.min_threshold;

  return (
    <View className="flex-1 p-4 bg-white dark:bg-gray-900">
      <View className="gap-4">
        <Text className="text-2xl font-bold dark:text-white">
          {product.name}
        </Text>

        <Text className="dark:text-gray-300 text-lg">
          Price: {product.price} MRU
        </Text>

        <Text
          className={`text-lg font-semibold ${
            isLowStock ? "text-red-600 dark:text-red-500" : "dark:text-gray-200"
          }`}
        >
          Quantity: {product.quantity}
        </Text>

        <Text className="dark:text-gray-300">
          Min Threshold: {product.min_threshold}
        </Text>

        <Text className="dark:text-gray-300">
          Expiration Date:{" "}
          {product.expiration_date
            ? product.expiration_date
            : "No expiration date"}
        </Text>

        <Text className="dark:text-gray-300">
          Category ID: {product.category}
        </Text>

        <View className="flex-row gap-3 mt-6">
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/products/edit",
                params: { id: product.id.toString() },
              })
            }
            className="flex-1 bg-blue-600 p-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">
              Edit Product
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDelete}
            className="flex-1 bg-red-600 p-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
