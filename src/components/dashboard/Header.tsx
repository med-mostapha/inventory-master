import { Link } from "expo-router";
import { Text, View } from "react-native";

const Header = () => {
  const links = [
    { name: "Add", href: "/products/add" },
    { name: "Edit ", href: "/products/edit" },
    { name: "Product", href: "/product/sdetails" },

    { name: "Add", href: "/categories/add" },
    { name: "View All", href: "/categories" },
  ] as const;

  return (
    <View className="w-full flex flex-row justify-around items-center">
      {links.map((link, i) => (
        <Link key={i} href={"/products/add"}>
          <Text className="text-sm">{link.name}</Text>
        </Link>
      ))}
    </View>
  );
};

export default Header;
