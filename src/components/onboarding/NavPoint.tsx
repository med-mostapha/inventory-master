import React from "react";
import { View } from "react-native";

type Props = {
  total: number;
  active: number;
};
const NavPoint = ({ total, active }: Props) => {
  return (
    <View className="flex-row items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={
            index === active
              ? "w-6 h-3 rounded-full bg-blue-600"
              : "w-3 h-3 rounded-full bg-gray-300"
          }
        />
      ))}
    </View>
  );
};

export default NavPoint;
