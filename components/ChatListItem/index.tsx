import React from "react";
import { Text, View, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
export interface ChatListProps {
  chatRoom: ChatRoom;
}
export const ChatListItem = ({ chatRoom }: ChatListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: chatRoom.users[0].imageUrl }}
          style={styles.avatar}
        />
        <View style={styles.midContainer}>
          <Text>{chatRoom.users[0].name}</Text>
          <Text>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text>{chatRoom.lastMessage.createdAt}</Text>
      </View>
    </View>
  );
};
