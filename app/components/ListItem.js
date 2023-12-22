import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    marginTop: 15,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
