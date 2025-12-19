import { styles } from "@/src/styles/ProductsForm";
import { Category } from "@/src/types/  categori";
import { router } from "expo-router";
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

  useEffect(() => {
    if (category) {
      const { name, description, count } = category;
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
        <Text style={styles.label} className="font-medium">
          Name
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          keyboardType="ascii-capable"
          maxLength={25}
          style={{
            ...styles.input,
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
        <Text style={styles.label} className="font-medium">
          Description
        </Text>
        <TextInput
          keyboardType="ascii-capable"
          value={description}
          onChangeText={setDescription}
          style={{
            ...styles.input,
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
