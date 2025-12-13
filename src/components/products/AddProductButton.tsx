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
      className="rounded-xl bg-blue-500  py-2 fixed flex flex-row px-4 items-center  justify-center"
    >
      <Text className="text-white  text-sm font-medium">Add</Text>
      <Ionicons name="add" size={16} color={"white"} />
    </TouchableOpacity>
  );
};

export default AddProductButton;
