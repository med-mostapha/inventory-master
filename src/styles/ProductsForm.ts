import { StyleSheet } from "react-native";
import colors from "tailwindcss/colors";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.gray[200],
    borderRadius: 20,
    padding: 20,
    gap: 15,
  },
  field: {
    display: "flex",
    gap: 3,
  },
  label: {},
  input: {
    // backgroundColor: colors.zinc[50],
    borderColor: colors.zinc[300],
    padding: 12,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  placeholder: {
    color: colors.gray[400],
  },
  button: {
    backgroundColor: colors.blue[500],
    padding: 12,
    paddingVertical: 12,
    borderRadius: 10,
    flexGrow: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
