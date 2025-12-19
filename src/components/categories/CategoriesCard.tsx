import { Category } from "@/src/types/  categori";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type Props = {
  categorie: Category;
};
const CategoriesCard = ({ categorie }: Props) => {
  const onPressEdit = (id: string) => {
    router.push({
      pathname: "/categories/edit",
      params: { id: categorie.id },
    });
  };

  return (
    <View className="bg-white rounded-xl px-6 py-4 mb-4 elevation-lg shadow-sm flex flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-medium">{categorie.name}</Text>
        <Text className="text-base text-gray-600">{categorie.description}</Text>
        <View className="flex flex-row gap-1">
          <Text>{categorie.count}</Text>
          <Ionicons name="cube-outline" size={16} color={colors.gray[500]} />
        </View>
      </View>
      <View className="gap-2%">
        <TouchableOpacity onPress={() => onPressEdit(categorie.id)}>
          <Feather name="edit" size={24} color={colors.blue[500]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesCard;
