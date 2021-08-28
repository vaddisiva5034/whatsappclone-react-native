import React from "react";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
export const ChatRoomScreen = () => {
  const route = useRoute();
  //@ts-ignore
  console.log(route?.params?.id);
  return <Text>Chat room </Text>;
};
