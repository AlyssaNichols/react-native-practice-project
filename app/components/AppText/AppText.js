import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function AppText({ children, style }) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}
