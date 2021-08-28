import React from "react";
import { View, Text, Image } from "react-native";
import * as Contacts from "expo-contacts";
import { styles } from "./ContactListItem.style";
import { EvilIcons } from "@expo/vector-icons";

interface ContactListItemProps {
  contactData: Contacts.Contact;
}
export const ContactListItem = (props: ContactListItemProps) => {
  return (
    <View style={styles.container}>
      {props.contactData.imageAvailable ? (
        <Image
          style={styles.image}
          source={{ uri: props?.contactData?.image?.uri }}
        />
      ) : (
        <EvilIcons name="user" size={70} color="black" />
      )}
      <View style={styles.midContainer}>
        <Text style={styles.name}>{props.contactData.name}</Text>
        <Text style={styles.phoneNumber}>
          {props.contactData.phoneNumbers?.[0]?.number || ""}
        </Text>
      </View>
    </View>
  );
};
