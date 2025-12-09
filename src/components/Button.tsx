import { Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  thems?: string;
};

const Button = ({ title, onPress, thems = "first" }: ButtonProps) => {
  return (
    <Pressable
      className={`${thems === "second" ? "bg-zinc-200 " : "bg-blue-800 color-white"} w-[90%]  font-bold rounded-[10] text-center py-4 my-2`}
      onPress={onPress}
    >
      <Text
        className={`${thems === "second" ? "text-black" : "text-white"} font-bold text-center text-xl`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

// const styles = StyleSheet.create({
//   button: {
//     color: "white",
//     fontWeight: "bold",
//     borderRadius: 10,
//     width: "90%",
//     textAlign: "center",
//     paddingVertical: 10,
//     marginVertical: 2,
//   },
// });
