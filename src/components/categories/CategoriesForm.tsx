import { Category } from "@/types/category";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import PrButton from "../products/PrButton";
import { styles } from "@/styles/ProductsForm";

type Props = {
  category?: Category;
  onSubmit: (data: { name: string; description: string }) => Promise<void>;
};

const CategorisForm = ({ category, onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ name?: string }>({});
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description ?? "");
    }
  }, [category]);

  const validate = () => {
    let newErrors: any = {};
    if (!name.trim()) newErrors.name = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    await onSubmit({
      name: name.trim(),
      description: description.trim(),
    });
  };

  return (
    <View className="gap-4 p-3">
      <View>
        <Text className="dark:text-white">Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{
            ...styles.input,
            color: isDark ? "white" : "black",
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
        />
        {errors.name && <Text className="text-red-500">{errors.name}</Text>}
      </View>

      <View>
        <Text className="dark:text-white">Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{
            ...styles.input,
            color: isDark ? "white" : "black",
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
        />
      </View>

      <View className="flex-row gap-3 mt-4">
        <PrButton title="Save" onPress={handleSubmit} />
        <PrButton
          title="Cancel"
          thems="secodery"
          onPress={() => router.back()}
        />
      </View>
    </View>
  );
};

export default CategorisForm;
