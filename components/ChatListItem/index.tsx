import React from "react";
import { Text, View, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export interface ChatListProps {
  chatRoom: ChatRoom;
}
export const ChatListItem = ({ chatRoom }: ChatListProps) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("chatRoom", {
      id: chatRoom.id,
      name: chatRoom.users[1].name,
      imageUri: chatRoom.users[1].imageUri,
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: chatRoom.users[1].imageUri }}
            style={styles.avatar}
          />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{chatRoom.users[1].name}</Text>
            <Text style={styles.message}>{chatRoom.lastMessage.content}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
