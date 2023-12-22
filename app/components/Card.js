import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden", // this will hide any child component that overflows
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
