import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>White Chair For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../../assets/headshot.JPG")}
          title="Alyssa Nichols"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 450,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
