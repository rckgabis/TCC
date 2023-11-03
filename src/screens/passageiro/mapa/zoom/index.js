import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

const ImageZoomComponent = ({ imageSource }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={width}
        cropHeight={height}
        imageWidth={width}
        imageHeight={height}
      >
        <Image
          source={imageSource}
          style={{
            width,
            height,
          }}
          resizeMode="contain"
        />
      </ImageZoom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "7C5CCE",
  },
});

export default ImageZoomComponent;
