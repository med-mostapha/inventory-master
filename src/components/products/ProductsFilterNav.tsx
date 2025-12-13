import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Props = {
  types: { name: string; count: number }[];
};
const ProductsFilterNav = ({ types }: Props) => {
  return (
    <ScrollView horizontal className="flex flex-row">
      {types.map(({ name, count }, i) => (
        <TouchableOpacity
          className={`${name === "All" ? "bg-black/90" : "bg-zinc-100"} mx-3 px-3 py-2 my-2 rounded-full flex flex-row items-center justify-around text-center gap-2 `}
          key={i}
        >
          <Text className={`${name === "All" ? "text-white" : ""}`}>
            {name}
          </Text>
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
