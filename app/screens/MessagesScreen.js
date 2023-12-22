import {
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemFlagAction from "../components/ListItemFlagAction";
// this will be data from backend in real app
const messages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description 5",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 6,
    title: "Title 6",
    description: "Description 6",
    image: require("../../assets/headshot.jpeg"),
  },
];

export default function MessagesScreen() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log(item)} />
              )}
              renderLeftActions={ListItemFlagAction}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
