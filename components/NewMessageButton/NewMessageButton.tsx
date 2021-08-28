import React from "react";
import { View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./NewMessageButton.style";

export const NewMessageButton = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("contacts");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
};
