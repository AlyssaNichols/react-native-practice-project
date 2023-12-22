import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Chair",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Other Chair",
    price: 200,
    image: require("../../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "Omg one more chair",
    price: 400,
    image: require("../../assets/chair.jpg"),
  },
];
export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});
