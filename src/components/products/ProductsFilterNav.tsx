import React from "react";
import { Category } from "@/types/category";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Props {
  categoris: Category[];
  selectedCategory: number | "all";
  onSelectCategory: (id: number | "all") => void;
}

const ProductsFilterNav: React.FC<Props> = ({
  categoris,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-row"
    >
      {categoris.map((category) => {
        const isSelected =
          (selectedCategory === "all" && category.id === 0) ||
          selectedCategory === category.id;

        return (
          <TouchableOpacity
            key={category.id}
            onPress={() =>
              category.id === 0
                ? onSelectCategory("all")
                : onSelectCategory(category.id)
            }
            className={`mx-2 px-4 py-2 my-2 rounded-full flex flex-row gap-2 ${
              isSelected
                ? "bg-black/80 dark:bg-sky-500/30"
                : "border-zinc-600 border-[1px] dark:bg-zinc-500/10"
            }`}
          >
            <Text
              className={
                isSelected ? "text-white" : "text-zinc-500 dark:text-zinc-400"
              }
            >
              {category.name}
            </Text>
            {/* <View className="rounded-full w-4 h-4 justify-center items-center" /> */}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ProductsFilterNav;
