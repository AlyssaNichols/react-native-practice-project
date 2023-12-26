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
    title: "Jane Doe",
    description: "Hey! Is this item still available?",
    image: require("../../assets/headshot.jpeg"),
  },
  {
    id: 2,
    title: "Matthew Smith",
    description: "I'm interested in this item. When will you be able to post?",
    image: require("../../assets/headshot2.jpeg"),
  },
  {
    id: 3,
    title: "Hannah Montana",
    description: "Do you have any more photos available? I love this item!",
    image: require("../../assets/headshot3.jpeg"),
  },
  {
    id: 4,
    title: "Jill Sampson",
    description:
      "I'm very interested in this item. When will you be able to post?",
    image: require("../../assets/headshot4.jpeg"),
  },
  {
    id: 5,
    title: "Brittany Spears",
    description:
      "This item has peaked my interest. When will you be able to post?",
    image: require("../../assets/headshot5.jpeg"),
  },
  {
    id: 6,
    title: "Dean Miller",
    description: "I love this! Is it available yet?",
    image: require("../../assets/headshot6.jpeg"),
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
