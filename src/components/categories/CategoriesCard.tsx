import { Category } from "@/types/category";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type Props = {
  category: Category;
  onDelete: (id: number) => void;
};

const CategoriesCard = ({ category, onDelete }: Props) => {
  const router = useRouter();

  const confirmDelete = () => {
    Alert.alert("Delete Category", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => onDelete(category.id),
      },
    ]);
  };

  return (
    <View className="bg-white dark:bg-gray-800 rounded-xl px-6 py-4 mb-4 flex flex-row justify-between items-center shadow-sm">
      <View className="w-10/12 gap-1">
        <Text className="text-lg font-medium dark:text-gray-100">
          {category.name}
        </Text>
        <Text className="text-base text-gray-600 dark:text-gray-400">
          {category.description}
        </Text>
      </View>

      <View className="flex-row gap-4">
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/categories/edit",
              params: { id: category.id.toString() },
            })
          }
        >
          <Feather name="edit" size={22} color={colors.blue[500]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={confirmDelete}>
          <Feather name="trash-2" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesCard;
