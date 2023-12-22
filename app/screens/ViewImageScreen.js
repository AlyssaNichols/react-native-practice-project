import React from "react";
import { View } from "react-native";
import { Image, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute", // allows us to position the icon anywhere
    top: 40,
    left: 30,
    borderRadius: 5,
  },
  container: {
    flex: 1, // takes up all available space
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute", // allows us to position the icon anywhere
    top: 40,
    right: 30,
    borderRadius: 5,
  },
});
export default ViewImageScreen;
