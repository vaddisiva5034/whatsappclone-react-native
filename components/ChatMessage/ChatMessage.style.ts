import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});
