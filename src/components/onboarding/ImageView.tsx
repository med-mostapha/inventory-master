import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  width?: number;
  height?: number;
};

const ImageView = ({ imgSource, width, height }: Props) => {
  const containerStyle: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <View style={containerStyle}>
      <Image source={imgSource} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
