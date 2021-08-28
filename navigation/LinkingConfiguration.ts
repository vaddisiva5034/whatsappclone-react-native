/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          camera: {
            screens: {
              TabOneScreen: "camera",
            },
          },
          chats: {
            screens: {
              TabOneScreen: "chats",
            },
          },
          status: {
            screens: {
              TabTwoScreen: "staus",
            },
          },
          calls: {
            screens: {
              TabTwoScreen: "calls",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
