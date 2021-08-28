import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ChatListItem } from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { chatsList } from "../mock data/chatlist.mockdata";
import { ChatRoom, RootTabScreenProps } from "../types";

export function ChatsScreen({ navigation }: RootTabScreenProps<"chats">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatsList()}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
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
