import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { ChatsScreen } from "../screens/ChatsScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Fontisto } from "@expo/vector-icons";
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export function MainNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TopTab.Screen
        name="camera"
        component={() => null}
        options={{
          tabBarIcon: (props: any) => (
            <Fontisto name="camera" color={props.color} size={16} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <TopTab.Screen
        name="chats"
        component={ChatsScreen}
        options={{
          title: "Chats",
        }}
      />
      <TopTab.Screen
        name="status"
        component={TabTwoScreen}
        options={{
          title: "Status",
        }}
      />
      <TopTab.Screen
        name="calls"
        component={TabTwoScreen}
        options={{
          title: "Calls",
        }}
      />
    </TopTab.Navigator>
  );
}
