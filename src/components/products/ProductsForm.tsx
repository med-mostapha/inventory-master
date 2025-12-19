import { styles } from "@/src/styles/ProductsForm";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import IconButton from "../ui/IconButton";
import PrButton from "./PrButton";

const ProductsForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    categories: "",
    description: "",
  });

  const handleSubmit = () => {
    let valide = true;
    let newErrors = {
      name: "",
      price: "",
      quantity: "",
      image: "",
      categories: "",
      description: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valide;
      false;
    }

    if (!price) {
      newErrors.price = "Price is reuired";
      valide = false;
    }

    if (!quantity) {
      newErrors.quantity = "Quantity is reuired";
      valide = false;
    }

    if (!categories) {
      newErrors.categories = "Categories is reuired";
      valide = false;
    }

    if (!description.trim()) {
      newErrors.description = "Description is reuired";
      valide = false;
    }

    setErrors(newErrors);

    if (valide) {
      Alert.alert("Success", "Product added successfully");

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

      {/* two input in the same row */}
      <View className="flex flex-row gap-3">
        <View style={styles.field} className="flex-grow">
          <Text style={styles.label} className="font-medium">
            Price
          </Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            keyboardType="ascii-capable"
            maxLength={6}
            style={{
              ...styles.input,
              borderColor: errors.name ? "red" : styles.input.borderColor,
            }}
            placeholder="Enter product price"
            placeholderTextColor={styles.placeholder.color}
          />
          {errors.price ? (
            <Text className="text-red-500 pl-1">{errors.price}</Text>
          ) : null}
        </View>

        <View style={styles.field} className="flex-grow ">
          <Text style={styles.label} className="font-medium">
            Quantity
          </Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            maxLength={5}
            keyboardType="numeric"
            style={{
              ...styles.input,
              borderColor: errors.name ? "red" : styles.input.borderColor,
            }}
            placeholder="Enter product quantity"
            placeholderTextColor={styles.placeholder.color}
          />
          {errors.quantity ? (
            <Text className="text-red-500 pl-1">{errors.quantity}</Text>
          ) : null}
        </View>
      </View>

      {/* image pucker */}
      <View style={styles.field}>
        <Text style={styles.label} className="font-medium">
          Image
        </Text>
        <View>
          <IconButton
            icon={"filter"}
            label={"Choose a photo"}
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium">
          Categories
        </Text>
        <TextInput
          value={categories}
          onChangeText={setCategories}
          maxLength={25}
          style={{
            ...styles.input,
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
          placeholder="Choose a category"
          placeholderTextColor={styles.placeholder.color}
        />
        {errors.quantity ? (
          <Text className="text-red-500 pl-1">{errors.quantity}</Text>
        ) : null}
      </View>

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium">
          Description
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{
            ...styles.input,
            borderColor: errors.name ? "red" : styles.input.borderColor,
          }}
          keyboardType="ascii-capable"
          maxLength={50}
          placeholder="Enter description"
          placeholderTextColor={styles.placeholder.color}
        />
        {errors.quantity ? (
          <Text className="text-red-500 pl-1">{errors.quantity}</Text>
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

export default ProductsForm;
