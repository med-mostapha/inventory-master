import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

type headerCardProps = {
  NavigateTo: "products/add" | "gategories/add";
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
};

function HeaderCard({ title, icon, NavigateTo }: headerCardProps) {
  const handleOnPress = () => {
    if (NavigateTo === "products/add") router.push("/products/add");
    else if (NavigateTo === "gategories/add") {
      router.push("/categories/add");
    }
  };
  return (
    <TouchableOpacity
      className={
        "bg-white mx-1 rounded-xl px-2 py-5 flex-1 items-center elevation-lg shadow-sm"
      }
      onPress={handleOnPress}
    >
      <MaterialIcons name={icon} color={"#0284c7"} size={30} />

      <Text className={"font-bold text-black/90"}>{title}</Text>
    </TouchableOpacity>
  );
}

export default HeaderCard;
