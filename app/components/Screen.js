import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    height: "100%",
  },
  view: {
    flex: 1,
  },
});
