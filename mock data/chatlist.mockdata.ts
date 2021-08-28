import { ChatRoom } from "../types";
import { image, name } from "faker";
export const chatsList = (): ChatRoom[] => [
  {
    id: "1",
    users: [
      {
        id: "u1",
        name: "Vadim",

        imageUri: image.imageUrl(),
      },
      {
        id: "u2",
        name: "Lukas",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m1",
      content: "Well done this sprint, guys!",
      createdAt: "2020-10-03T14:48:00.000Z",
    },
  },
  {
    id: "2",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u3",
        name: "Daniil",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m2",
      content: "How are you doing?",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
  },
  {
    id: "3",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u4",
        name: "Alex",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m3",
      content: "Hi, Vadim.",
      createdAt: "2020-10-02T14:48:00.000Z",
    },
  },
  {
    id: "4",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u5",
        name: "Vlad",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m4",
      content: "Can you review my last merge",
      createdAt: "2020-09-29T14:48:00.000Z",
    },
  },
  {
    id: "5",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u6",
        name: "Elon Musk",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m5",
      content: "I would be happy",
      createdAt: "2020-09-30T14:48:00.000Z",
    },
  },
  {
    id: "6",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u7",
        name: "Adrian",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m6",
      content: "I have a solution",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
  },
  {
    id: "7",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u8",
        name: "Borja",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m7",
      content: "How are you doing?",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
  },
  {
    id: "8",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u9",
        name: "Mom",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m8",
      content: "Dear, did you eat?",
      createdAt: "2020-09-27T15:40:00.000Z",
    },
  },
  {
    id: "9",
    users: [
      {
        id: "u1",
        name: "Vadim",
        imageUri: image.imageUrl(),
      },
      {
        id: "u10",
        name: "Angelina Jolie",
        imageUri: image.imageUrl(),
      },
    ],
    lastMessage: {
      id: "m9",
      content: "Meet me at the same place",
      createdAt: "2020-09-25T15:40:00.000Z",
    },
  },
];
