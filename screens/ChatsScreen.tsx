import * as React from "react";
import { StyleSheet } from "react-native";
import { ChatListItem } from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ChatRoom, RootTabScreenProps } from "../types";

export function ChatsScreen({ navigation }: RootTabScreenProps<"chats">) {
  const chatsList: ChatRoom = {
    id: "1",
    users: [
      {
        id: "1",
        name: "kiran",
        imageUrl:
          "https://lh3.googleusercontent.com/ogw/ADea4I5VNcC54djl7M5tKfuPX2AZqQG7CHqecgB87SvStw=s64-c-mo",
      },
    ],
    lastMessage: {
      id: "1",
      content: "hi",
      createdAt: "yeaterday",
    },
  };
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={chatsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
