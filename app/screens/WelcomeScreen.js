import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="primary"
          title="login"
          onPress={() => console.log("Login Tapped")}
        />
        <AppButton
          color="secondary"
          title="register"
          onPress={() => console.log("Register Tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end", // pushes the login button to the bottom
    alignItems: "center", // pushes the login button to the center
  },
  buttonContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 15,
  },
});
export default WelcomeScreen;
