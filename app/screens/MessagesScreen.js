import {
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import ListItem from "../components/Lists/ListItem";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/Lists/ListItemDeleteAction";
import ListItemFlagAction from "../components/Lists/ListItemFlagAction";
// this will be data from backend in real app
const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description",
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    console.log("Deleting", message);
    const newMessages = setMessages(
      messages.filter((m) => m.id !== message.id)
    );
  };

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
              onPress={() => console.log("MESSAGE CLICKED", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              renderLeftActions={() => (
                <ListItemFlagAction onPress={() => console.log("FLAG", item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages(initialMessages);
          }}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
