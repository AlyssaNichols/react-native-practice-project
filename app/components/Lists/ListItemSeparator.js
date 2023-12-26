import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "95%",
    alignSelf: "center",
    height: 1,
    backgroundColor: colors.light,
  },
});
