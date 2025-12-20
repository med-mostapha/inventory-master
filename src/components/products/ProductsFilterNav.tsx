import { Category } from "@/src/types/  categori";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Props = {
  categoris: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
};

const ProductsFilterNav = ({
  categoris,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-row"
    >
      {categoris.map(({ id, name, count }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onSelectCategory(id)}
          className={`mx-3 px-4 py-2 my-2 rounded-full flex flex-row gap-2 ${
            selectedCategory === id
              ? "bg-black/80 dark:bg-sky-500/30"
              : " border-zinc-600 border-[1px] dark:bg-zinc-500/10"
          }`}
        >
          <Text
            className={
              selectedCategory === id
                ? "text-white"
                : "text-zinc-500 dark:text-zinc-400"
            }
          >
            {name}
          </Text>
          <View className={`rounded-full w-4 h-4 justify-center items-center `}>
            <Text
              className={`${selectedCategory === id ? "text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              {count}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductsFilterNav;
