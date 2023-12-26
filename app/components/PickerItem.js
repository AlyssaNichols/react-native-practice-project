import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import App from "../../App";
import AppText from "./AppText/AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
