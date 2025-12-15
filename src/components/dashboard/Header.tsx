import { useRouter } from "expo-router";
import { View } from "react-native";
import HeaderCard from "./HeaderCard";

const Header = () => {
  const router = useRouter();

  return (
    <View className="w-full flex flex-row justify-around gap-1 items-center  py-4">
      <HeaderCard
        NavigateTo={"products/add"}
        icon={"add"}
        title={"Add Product"}
      />
      <HeaderCard
        NavigateTo={"gategories/add"}
        icon={"add"}
        title={"Add Gategorie"}
      />
    </View>
  );
};

export default Header;
