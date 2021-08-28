import React from "react";
import { Text, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import { chat } from "../mock data/chat.mockdata";
import { ChatMessage } from "../components/ChatMessage/ChatMessage";
export const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/564x/fc/d9/22/fcd9224687b3f6380821c8a6a67e93e1.jpg",
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
    </ImageBackground>
  );
};
