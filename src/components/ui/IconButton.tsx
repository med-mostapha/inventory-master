import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

function IconButton({ icon, label, onPress }: Props) {
  return (
    <TouchableOpacity
      className="flex flex-row gap-3 border-2 border-gray-200 bg-gray-200/50  p-4 rounded-xl justify-center items-center"
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={24} color={"black"}></MaterialIcons>
      <Text className="black">{label}</Text>
    </TouchableOpacity>
  );
}

export default IconButton;
