import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const router = useRouter();
  const styles = {
    container:
      "bg-white/90 mx-1 shadow-sm font-bold text-black/80 rounded-xl px-2 py-5 flex-1 items-center",
    icon: "",
    text: "font-bold text-black/90",
  };
  return (
    <View className="w-full flex flex-row justify-around gap-1 items-center  py-4">
      <TouchableOpacity
        className={styles.container}
        onPress={() => router.push("/products/add")}
      >
        <Ionicons
          className={styles.icon}
          name="add-circle-outline"
          color={"blue"}
          size={30}
        />
        <Text className={styles.text}>New products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={styles.container}
        onPress={() => router.push("/categories/add")}
      >
        <Ionicons
          className={styles.icon}
          name="add-circle-outline"
          color={"blue"}
          size={30}
        />
        <Text className={styles.text}>New gategories</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
