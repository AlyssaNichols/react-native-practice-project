import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/Lists/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>White Chair For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/headshot.jpeg")}
            title="Jane Johnson"
            subTitle="5 Listings"
          />
        </View>
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
  userContainer: {
    marginVertical: 30,
  },
});
