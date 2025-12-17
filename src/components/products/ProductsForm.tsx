import { styles } from "@/src/styles/ProductsForm";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";
import IconButton from "../ui/IconButton";
import PrButton from "./PrButton";

type Props = {
  onSubmit: () => {};
};

const ProductsForm = ({ onSubmit }: Props) => {
  return (
    <View style={styles.container}>
      {/* <Text className="text-2xl text-center font-medium">Add New Products</Text> */}

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium">
          Name
        </Text>
        <TextInput
          maxLength={25}
          style={styles.input}
          placeholder="Enter product name"
          placeholderTextColor={styles.placeholder.color}
        />
      </View>

      {/* two input in the same row */}
      <View className="flex flex-row gap-3">
        <View style={styles.field} className="flex-grow">
          <Text style={styles.label} className="font-medium">
            Price
          </Text>
          <TextInput
            maxLength={6}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter product price"
            placeholderTextColor={styles.placeholder.color}
          />
        </View>

        <View style={styles.field} className="flex-grow">
          <Text style={styles.label} className="font-medium">
            Quantity
          </Text>
          <TextInput
            maxLength={5}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter product quantity"
            placeholderTextColor={styles.placeholder.color}
          />
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
          maxLength={25}
          style={styles.input}
          placeholder="Choose a category"
          placeholderTextColor={styles.placeholder.color}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label} className="font-medium">
          Description
        </Text>
        <TextInput
          style={styles.input}
          maxLength={50}
          placeholder="Enter description"
          placeholderTextColor={styles.placeholder.color}
        />
      </View>

      <View className="flex flex-row gap-3">
        <PrButton title={"Add"} onPress={onSubmit} />
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
