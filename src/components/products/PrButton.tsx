import { styles } from "@/src/styles/ProductsForm";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

type Props = {
  title: string;
  thems?: "destructive" | "secodery" | "small";
  onPress: () => void;
};

const PrButton = ({ title, thems, onPress }: Props) => {
  if (thems === "destructive") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[{ ...styles.button, backgroundColor: colors.red[600] }]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (thems === "small") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="p-3 bg-blue-500 rounded-xl "
      >
        <Text className="text-sm text-white text-center font-medium">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        thems !== "secodery"
          ? styles.button
          : [{ ...styles.button, backgroundColor: colors.gray[200] }]
      }
    >
      <Text
        style={
          thems !== "secodery"
            ? styles.text
            : [{ ...styles.text, color: "black" }]
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrButton;
