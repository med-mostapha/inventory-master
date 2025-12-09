import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
  width: number;
  height: number;
};

const ImageView = ({ imgSource, width, height }: Props) => {
  return <Image source={imgSource} style={{ width: width, height: height }} />;
};

export default ImageView;

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 240,
  },
});
