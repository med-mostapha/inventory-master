import { Text, View } from "react-native";

type Props = {
  title: string;
  body: string;
};

const TextTemplate = ({ title, body }: Props) => {
  return (
    <View className="items-center gap-4">
      <Text className="text-blue-600 text-3xl font-bold text-center leading-tight">
        {title}
      </Text>
      <Text className="text-gray-600 text-base text-center leading-relaxed px-2">
        {body}
      </Text>
    </View>
  );
};

export default TextTemplate;
