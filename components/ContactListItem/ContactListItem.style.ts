import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  midContainer: {
    marginLeft: 15,
  },
  phoneNumber: {
    color: "gray",
  },
});
