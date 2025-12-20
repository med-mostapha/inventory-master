import { styles } from "@/src/styles/ProductsForm";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
        style={[{ ...styles.button, backgroundColor: colors.red[500] }]}
      >
        {/* <Text style={styles.text}>{title}</Text> */}
        <Ionicons
          className="text-center"
          size={16}
          color={"white"}
          name="trash"
        />
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
      // style={
      //   thems !== "secodery"
      //     ? styles.button
      //     : [{ ...styles.button, backgroundColor: colors.gray[200] }]
      // }
      className="flex-grow items-center justify-center rounded-xl border-[1px] border-blue-500"
    >
      <View className="flex flex-row gap-2 items-center">
        <Text
          className="text-sky-600 text-lg"
          // style={
          //   thems !== "secodery"
          //     ? styles.text
          //     : [{ ...styles.text, color: "black" }]
          // }
        >
          {title}
        </Text>
        <Feather name="edit" size={16} color={colors.blue[500]} />
      </View>
    </TouchableOpacity>
  );
};

export default PrButton;
