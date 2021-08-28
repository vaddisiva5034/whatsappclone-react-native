import React from "react";
import { View, Text, TextInput } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import { styles } from "./InputBox.styles";
import { useState } from "react";
export const InputBox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="gray"></FontAwesome5>
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={setInputValue}
          autoFocus
        />
        <Entypo name="attachment" size={24} style={styles.icons} color="gray" />
        {!inputValue ? (
          <Fontisto name="camera" size={24} style={styles.icons} color="gray" />
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        {!inputValue ? (
          <MaterialCommunityIcons name="microphone" size={24} color="white" />
        ) : (
          <Ionicons name="send" size={24} color="white" />
        )}
      </View>
    </View>
  );
};
