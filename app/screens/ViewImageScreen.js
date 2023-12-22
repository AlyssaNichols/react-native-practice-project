import React from "react";
import { View } from "react-native";
import { Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    position: "absolute", // allows us to position the icon anywhere
    top: 40,
    right: 30,
    borderRadius: 5,
  },
});
export default ViewImageScreen;
