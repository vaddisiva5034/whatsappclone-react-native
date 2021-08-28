import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
  },
  leftContainer: {
    flexDirection: "row",
  },
  rightContainer: {
    flexDirection: "row-reverse",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  message: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
