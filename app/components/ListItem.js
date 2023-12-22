import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
