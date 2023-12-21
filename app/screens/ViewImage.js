import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function ViewImage() {
  return (
    <View
      style={{
        backgroundColor: "antiquewhite",
        flex: 1, // takes up all available space
        flexDirection: "row", // row is horizontal, column in vertical axis
        justifyContent: "center", // since its row this is for the primary axis
        alignItems: "center", // since its row this is for the secondary axis
        // alignContent: "center", // only works with flexWrap
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
