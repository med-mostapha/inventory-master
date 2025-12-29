import { ActivityIndicator, Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
};

const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = true,
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-200";
      case "outline":
        return "bg-transparent border-2 border-blue-800";
      default:
        return "bg-blue-600";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "secondary":
        return "text-gray-800";
      case "outline":
        return "text-blue-800";
      default:
        return "text-white";
    }
  };

  return (
    <Pressable
      className={`
        ${getVariantStyles()}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50" : ""}
        rounded-xl px-6 py-4
      `}
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => ({
        opacity: pressed && !disabled ? 0.8 : 1,
      })}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "white" : "#1e40af"}
        />
      ) : (
        <Text className={`${getTextStyles()} font-bold text-center text-lg`}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
