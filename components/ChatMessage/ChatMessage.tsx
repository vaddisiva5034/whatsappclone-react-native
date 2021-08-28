import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import { styles } from "./ChatMessage.style";
import moment from "moment";
interface ChatMessageProps {
  message: Message;
}
export function ChatMessage(props: ChatMessageProps) {
  const { message } = props;
  const isMyMessage = () => message.user.id === "u1";
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.messageBox,
          backgroundColor: isMyMessage() ? "#d4f5b6" : "#fff",
          marginLeft: isMyMessage() ? 100 : 0,
          marginRight: !isMyMessage() ? 100 : 0,
        }}
      >
        {!isMyMessage() ? (
          <Text style={styles.name}>{message.user.name}</Text>
        ) : null}
        <Text>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}
