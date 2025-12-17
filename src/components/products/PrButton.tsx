import { styles } from "@/src/styles/ProductsForm";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

type Props = {
  title: string;
  thems?: "destructive" | "secodery";
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
