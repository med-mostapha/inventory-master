import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

function IconButton({ icon, label, onPress }: Props) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <TouchableOpacity
      className="flex flex-row gap-3 border-[1px] border-gray-300   bg-gray-200/50 dark:bg-gray-700  p-4 rounded-xl justify-center items-center"
      onPress={onPress}
    >
      <MaterialIcons
        name={icon}
        size={22}
        color={isDark ? "white" : "black"}
      ></MaterialIcons>
      <Text className="font-medium dark:text-zinc-300">{label}</Text>
    </TouchableOpacity>
  );
}

export default IconButton;
