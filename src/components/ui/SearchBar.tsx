import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  placeholder: string;
  onChange: (text: string) => void;
};

const SearchBar = ({ placeholder, onChange }: Props) => {
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
    <View className="rounded-full bg-white px-4 flex flex-row items-center  my-2 elevation-lg shadow-sm">
      <Ionicons name="search" size={18} color={"gray"} />
      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={handleChangeText}
        className=" flex-1 p-4"
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        keyboardType="default"
      />

      {text.length > 0 && (
        <TouchableOpacity
          onPress={clearText}
          className="mr-1 bg-gray-100 rounded-full"
        >
          <Ionicons name="close" size={18} color="gray" />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => {}} className="ml-2">
        <Ionicons name="swap-vertical" size={18} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
