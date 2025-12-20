import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
type Props = {
  onPress: () => void;
};
const AddProductButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-3xl bg-transparent border-[1px] border-black/70 dark:border-zinc-600 py-2 fixed flex flex-row px-3 items-center gap-1"
    >
      <Text className="text-black/90 dark:text-gray-500 text-sm font-medium">
        Add
      </Text>
      <Ionicons name="add" size={16} color={"gray"} />
    </TouchableOpacity>
  );
};

export default AddProductButton;
