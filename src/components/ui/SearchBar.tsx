import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  placeholder: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ placeholder, onChange }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (value: string) => {
    setText(value);
    onChange(value);
  };

  const clearText = () => {
    setText("");
    onChange("");
    inputRef.current?.blur();
  };

  return (
    <View className="rounded-full bg-white dark:bg-gray-800 px-4 flex flex-row items-center  my-2 elevation-lg shadow-sm">
      <Ionicons name="search" size={18} color={isDark ? "white" : "gray"} />
      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={handleChangeText}
        className=" flex-1 p-4 dark:text-white"
        placeholder={placeholder}
        placeholderTextColor={isDark ? "gray" : "gray"}
        keyboardType="default"
      />

      {text.length > 0 && (
        <TouchableOpacity
          onPress={clearText}
          className="mr-1 bg-gray-100 dark:bg-gray-600 rounded-full"
        >
          <Ionicons name="close" size={18} color={isDark ? "white" : "gray"} />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => {}} className="ml-2">
        <Ionicons
          name="swap-vertical"
          size={18}
          color={isDark ? "white" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
