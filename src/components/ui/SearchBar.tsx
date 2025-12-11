import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  placeholder: string;
  onChange: () => void;
};

const SearchBar = ({ placeholder, onChange }: Props) => {
  return (
    <View className="rounded-full bg-white shadow-sm shadow-black/10 px-4 flex flex-row items-center  my-2 ">
      <Ionicons name="search" size={18} color={"gray"} />
      <TextInput
        // style={styles.input}
        onChange={onChange}
        className=" shadow-sm flex flex-grow rounded-full p-4"
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        keyboardType="default"
      />

      {/* <Ionicons name="list" size={18} color={"gray"} /> */}

      <TouchableOpacity onPress={() => {}} className="ml-2">
        <Ionicons name="swap-vertical" size={18} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
