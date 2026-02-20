import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import PrButton from "./PrButton";

type Props = {
  product?: Product;
  categories: Category[];
  onSubmit: (data: {
    name: string;
    price: string;
    quantity: number;
    min_threshold: number;
    expiration_date: string | null;
    category: number;
  }) => Promise<void>;
};

const ProductsForm = ({ product, categories, onSubmit }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minThreshold, setMinThreshold] = useState("");
  const [expirationDate, setExpirationDate] = useState<string | null>(null);
  const [category, setCategory] = useState<number | null>(null);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    categories.map((c) => ({
      label: c.name,
      value: c.id,
    })),
  );

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setQuantity(product.quantity.toString());
      setMinThreshold(product.min_threshold.toString());
      setExpirationDate(product.expiration_date);
      setCategory(product.category);
    }
  }, [product]);

  const validate = () => {
    let newErrors: any = {};

    if (!name.trim()) newErrors.name = "Required";
    if (!price) newErrors.price = "Required";
    if (!quantity) newErrors.quantity = "Required";
    if (!minThreshold) newErrors.min_threshold = "Required";
    if (!category) newErrors.category = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    await onSubmit({
      name: name.trim(),
      price,
      quantity: Number(quantity),
      min_threshold: Number(minThreshold),
      expiration_date: expirationDate,
      category: category!,
    });
  };

  return (
    <View className="gap-4 p-3">
      <View>
        <Text className="dark:text-white">Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="border p-2 rounded dark:text-white"
        />
        {errors.name && <Text className="text-red-500">{errors.name}</Text>}
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1">
          <Text className="dark:text-white">Price</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            className="border p-2 rounded dark:text-white"
          />
          {errors.price && <Text className="text-red-500">{errors.price}</Text>}
        </View>

        <View className="flex-1">
          <Text className="dark:text-white">Quantity</Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            className="border p-2 rounded dark:text-white"
          />
          {errors.quantity && (
            <Text className="text-red-500">{errors.quantity}</Text>
          )}
        </View>
      </View>

      <View>
        <Text className="dark:text-white">Min Threshold</Text>
        <TextInput
          value={minThreshold}
          onChangeText={setMinThreshold}
          keyboardType="numeric"
          className="border p-2 rounded dark:text-white"
        />
        {errors.min_threshold && (
          <Text className="text-red-500">{errors.min_threshold}</Text>
        )}
      </View>

      <View>
        <Text className="dark:text-white">Category</Text>
        <DropDownPicker
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          placeholder="Select category"
        />
        {errors.category && (
          <Text className="text-red-500">{errors.category}</Text>
        )}
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

export default ProductsForm;
