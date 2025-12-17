import { styles } from "@/src/styles/ProductsForm";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";
import PrButton from "../products/PrButton";

type Props = {
  onSubmit: () => void;
};

const CategorisForm = ({ onSubmit }: Props) => {
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

export default CategorisForm;
