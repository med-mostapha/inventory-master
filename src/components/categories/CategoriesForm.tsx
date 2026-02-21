import { styles } from "@/styles/ProductsForm";
import { Category } from "@/types/category";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import PrButton from "../products/PrButton";

type Props = {
  category?: Category;
};

const CategorisForm = ({ category }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ name: "", description: "" });
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  useEffect(() => {
    if (category) {
      const { name, description } = category;
      setName(name);
      setDescription(description ?? "");
    }
  }, []);

  const handleSubmit = () => {
    let valide = true;
    let newErrors = { name: "", description: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valide;
      false;
    }

    if (!description.trim()) {
      newErrors.description = "Description is reuired";
      valide = false;
    }

    setErrors(newErrors);

    if (valide) {
      Alert.alert("Success", "Category added successfully");

      router.back();
    }
  };
  return (
    <View style={styles.container}>
      {/* <Text className="text-2xl text-center font-medium">Add New Products</Text> */}

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium dark:text-gray-100">
          Name
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          keyboardType="ascii-capable"
          maxLength={25}
          style={{
            ...styles.input,
            color: isDark ? "white" : "black",
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
          placeholder="Enter product name"
          placeholderTextColor={styles.placeholder.color}
        />
        {errors.name ? (
          <Text className="text-red-500 pl-1">{errors.name}</Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium dark:text-gray-100">
          Description
        </Text>
        <TextInput
          keyboardType="ascii-capable"
          value={description}
          onChangeText={setDescription}
          style={{
            ...styles.input,
            color: isDark ? "white" : "black",
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
          maxLength={50}
          placeholder="Enter description"
          placeholderTextColor={styles.placeholder.color}
        />
        {errors.description ? (
          <Text className="text-red-500 pl-1">{errors.description}</Text>
        ) : null}
      </View>

      <View className="flex flex-row gap-3">
        <PrButton title={"Add"} onPress={handleSubmit} />
        <PrButton
          title={"Cancel"}
          thems="secodery"
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
};

export default CategorisForm;
