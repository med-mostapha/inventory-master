import AddProductButton from "@/components/products/AddProductButton";
import ProductCard from "@/components/products/ProductCard";
import ProductsFilterNav from "@/components/products/ProductsFilterNav";
import SearchBar from "@/components/ui/SearchBar";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { api } from "@/utils/api";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function ProductScreen() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | "all">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when screen is focused
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);

          const [productsRes, categoriesRes] = await Promise.all([
            api.get("/products/"),
            api.get("/categories/"),
          ]);

          setProducts(productsRes.data);
          setCategories(categoriesRes.data);
        } catch (err) {
          setError("Failed to load data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []),
  );

  // Add "All" category
  const categoriesWithAll = useMemo(() => {
    return [
      { id: 0, name: "All", description: "", created_at: "" },
      ...categories,
    ];
  }, [categories]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // if (loading) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white/80 dark:bg-gray-900">
      <View className="px-3 pt-3">
        <SearchBar
          placeholder="Search products..."
          onChange={(text) => setSearchQuery(text)}
        />

        <View className="flex flex-row items-center rounded-xl">
          <AddProductButton
            onPress={() => {
              router.push("/products/add");
            }}
          />

          <ProductsFilterNav
            categoris={categoriesWithAll}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </View>
      </View>

      <View className="flex-1">
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            className="p-2"
            data={filteredProducts}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{ gap: 10 }}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() =>
                  router.push({
                    pathname: "/products/details",
                    params: { id: item.id.toString() },
                  })
                }
              />
            )}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center mt-10">
                <Text className="text-zinc-500">No products found</Text>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
}
