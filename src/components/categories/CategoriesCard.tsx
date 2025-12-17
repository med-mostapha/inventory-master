import { Categorie } from "@/src/types/  categori";
import { Button, Text, TouchableOpacity, View } from "react-native";

type Props = {
  categorie: Categorie;
};
const CategoriesCard = ({ categorie }: Props) => {
  return (
    <TouchableOpacity className="bg-white rounded-xl px-6 py-4 mb-4 elevation-lg shadow-sm flex flex-row justify-between items-center">
      <View>
        <Text className="text-lg font-medium">{categorie.name}</Text>
        <Text className="text-base text-gray-600">
          {categorie.description ?? "Inormation about the products"}
        </Text>
        <Text>{categorie.count}</Text>
      </View>
      <View className="gap-2">
        <Button title="Edit" onPress={() => {}} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
