import { categories } from "@/src/types/  categori";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Props = {
  categoris: categories[];
};
const ProductsFilterNav = ({ categoris }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-row"
    >
      {categoris.map(({ id, name, count }) => (
        <TouchableOpacity
          className={`bg-zinc-100 mx-3 px-3 py-2 my-2 rounded-full flex flex-row items-center justify-around text-center gap-2 `}
          key={id}
        >
          <Text className={`text-zinc-500`}>{name}</Text>
          <View
            className={`${name === "All" ? "bg-white" : "bg-zinc-200"}  rounded-full  w-5 h-5 justify-center items-center`}
          >
            <Text className={`text-xs`}>{count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductsFilterNav;
