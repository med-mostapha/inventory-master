import CategoriesCard from "@/components/categories/CategoriesCard";
import PrButton from "@/components/products/PrButton";
import SearchBar from "@/components/ui/SearchBar";
import { Category } from "@/types/category";
import { api } from "@/utils/api";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import colors from "tailwindcss/colors";

export default function CategoriesScreen() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/categories/${id}/`);
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Failed to delete category");
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchCategories = async () => {
        try {
          setLoading(true);
          const res = await api.get("/categories/");
          setCategories(res.data);
        } catch (error) {
          console.error("Failed to fetch categories");
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    }, []),
  );

  const filtered = useMemo(() => {
    return categories.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [categories, search]);

  return (
    <View className="px-3 pt-3 flex-1 bg-white/90 dark:bg-gray-900">
      <SearchBar placeholder="Categories..." onChange={setSearch} />

      <View className="px-3 py-3 flex flex-row items-center justify-between">
        <View className="flex flex-row gap-3 items-center">
          <MaterialIcons name="category" size={20} color={colors.blue[500]} />
          <Text className="text-lg dark:text-gray-100">
            {categories.length}
          </Text>
        </View>

        <View className="w-1/3">
          <PrButton
            title="Add Category"
            thems="small"
            onPress={() => router.push("/categories/add")}
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
            data={filtered}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoriesCard category={item} onDelete={handleDelete} />
            )}
            ListEmptyComponent={
              <View className="flex-1 mt-10 items-center">
                <Text className="text-zinc-500/50">No categories found</Text>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
}
