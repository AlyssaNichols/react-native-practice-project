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
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

{
  /* <View
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
</View> */
}

{
  /* <View
style={{
  backgroundColor: "dodgerblue",
  width: "100%",
  height: orientation === "landscape" ? "100%" : "30%",
}}
></View> */
}
//
{
  /* <Text onPress={handleTextPress}> Hello React Native</Text>
<TouchableOpacity onPress={handleImagePress}>
  <Image
    // blurRadius={2}
    source={{
      width: 250,
      height: 300,
      uri: "https://picsum.photos/200/300",
    }}
  />
  <Text>Click Me</Text>
</TouchableOpacity>
<TouchableHighlight onPress={handleImagePress}>
  <Image
    // blurRadius={2}
    source={{
      width: 250,
      height: 300,
      uri: "https://picsum.photos/200/300",
    }}
  />
</TouchableHighlight>

<StatusBar style="auto" /> */
}
