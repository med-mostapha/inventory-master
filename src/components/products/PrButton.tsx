import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  thems?: "delete";
  onPress: () => void;
};

const PrButton = ({ title, thems, onPress }: Props) => {
  if (thems === "delete") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="bg-red-500/95 py-3 flex flex-row gap-2 rounded-md flex-grow items-center justify-center"
      >
        <Text className="text-white font-medium text-center">{title}</Text>
        <Ionicons name="trash" size={16} color={"white"} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-500/95  py-2 rounded-md flex-grow items-center justify-center"
    >
      <Text className="text-white font-medium text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default PrButton;
