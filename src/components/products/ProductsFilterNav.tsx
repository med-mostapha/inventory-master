import { categories } from "@/src/types/  categori";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Props = {
  categoris: categories[];
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
          className={`mx-3 px-3 py-2 my-2 rounded-full flex flex-row items-center gap-2 ${
            selectedCategory === id ? "bg-black" : "bg-zinc-100"
          }`}
        >
          <Text
            className={`${
              selectedCategory === id ? "text-white" : "text-zinc-500"
            }`}
          >
            {name}
          </Text>
          <View
            className={`rounded-full w-5 h-5 justify-center items-center ${
              selectedCategory === id ? "bg-white" : "bg-zinc-200"
            }`}
          >
            <Text className="text-xs">{count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductsFilterNav;
