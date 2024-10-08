const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000 * 2
);

import avatar1 from "@/public/images/users/user-1.jpg";
import avatar2 from "@/public/images/users/user-2.jpg";
import avatar3 from "@/public/images/users/user-3.jpg";
import avatar4 from "@/public/images/users/user-4.jpg";
import avatar5 from "@/public/images/users/user-5.jpg";
import avatar6 from "@/public/images/users/user-6.jpg";
import avatar7 from "@/public/images/users/user-1.jpg";
import avatar8 from "@/public/images/users/user-2.jpg";
import avatar9 from "@/public/images/users/user-3.jpg";
import avatar10 from "@/public/images/users/user-4.jpg";
import avatar11 from "@/public/images/users/user-5.jpg";
import { faker } from "@faker-js/faker";
export const profileUser = {
  id: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
  avatar: avatar1,
  fullName: "Mr. Bean",
  bio: "UX/UI Designer",
  role: "admin",
  about:
    "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  status: "online",
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false,
  },
  date: "10 am",
};

export const contacts = [
  {
    id: "55fe838e-9a09-4caf-a591-559803309ef1",
    fullName: "Felecia Rower",
    role: "Frontend Developer",
    about:
      "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
    avatar: avatar2,
    status: "online",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: "f68aaf08-8c41-4b74-8e15-d5e6cb409d5e",
    fullName: "Adalberto Granzin",
    role: "UI/UX Designer",
    about:
      "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
    avatar: avatar3,
    status: "online",
    unreadmessage: 1,
    date: "10 am",
  },
  {
    id: "56f5e28f-2e9d-4738-b9f3-d47f1b7a9986",
    fullName: "Joaquina Weisenborn",
    role: "Town planner",
    about:
      "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
    avatar: avatar4,
    status: "busy",
    unreadmessage: 1,
    date: "10 am",
  },
  {
    id: "48e0a3e0-7f0c-4b47-a0f4-9a2b39ea02e3",
    fullName: "Verla Morgano",
    role: "Data scientist",
    about:
      "Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.",
    avatar: avatar5,
    status: "online",
    unreadmessage: 2,
    date: "10 am",
  },
  {
    id: "fa6b2d5e-43a1-4e6d-b383-d6241e027af5",
    fullName: "Margot Henschke",
    role: "Dietitian",
    about:
      "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
    avatar: avatar6,
    status: "busy",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: "71c1654c-d2c7-42c8-80cb-f37f4ccae8fa",
    fullName: "Sal Piggee",
    role: "Marketing executive",
    about:
      "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
    avatar: avatar7,
    status: "online",
    unreadmessage: 2,
    date: "10 am",
  },
  {
    id: "d09b8a26-b2b7-4b99-9d27-0745a0f9b62f",
    fullName: "Miguel Guelff",
    role: "Special educational needs teacher",
    about:
      "Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.",
    avatar: avatar8,
    status: "online",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: "d8299fa1-8e4e-4c50-8a0c-2c77b58e0e90",
    fullName: "Mauro Elenbaas",
    role: "Advertising copywriter",
    about:
      "Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.",
    avatar: avatar9,
    status: "away",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: "f820e4c7-2d69-4183-bb4e-1e7f8038c7b4",
    fullName: "Bridgett Omohundro",
    role: "Designer, television/film set",
    about:
      "Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.",
    avatar: avatar10,
    status: "offline",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: "362e4e3a-7b8d-48b6-a9d1-8e3d3a11a9e4",
    fullName: "Zenia Jacobs",
    role: "Building surveyor",
    about:
      "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
    avatar: avatar11,
    status: "away",
    unreadmessage: 1,
    date: "10 am",
  },
];

export const chats = [
  {
    id: "55fe838e-9a09-4caf-a591-559803309ef1",
    userId: "55fe838e-9a09-4caf-a591-559803309ef1",
    unseenMsgs: 0,
    chat: [
      {
        message: "Hi",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message: "Hello. How can I help You?",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "Can I get details of my last transaction I made last month?",
        time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message: "We need to check if we can provide you such information.",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "I will inform you as I get update on this.",
        time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "If it takes long you can mail me at my mail address.",
        time: dayBeforePreviousDay,
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
    ],
  },
  {
    id: "f68aaf08-8c41-4b74-8e15-d5e6cb409d5e",
    userId: "f68aaf08-8c41-4b74-8e15-d5e6cb409d5e",
    unseenMsgs: 1,
    chat: [
      {
        message: "How can we help? We're here for you!",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message:
          "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
        time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It should be Bootstrap 5 compatible.",
        time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Absolutely!",
        time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message: "Modern admin is the responsive bootstrap 5 admin template.!",
        time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message: "Looks clean and fresh UI.",
        time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It's perfect for my next project.",
        time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "How can I purchase it?",
        time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Thanks, from ThemeForest.",
        time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
        senderId: "e2c1a571-5f7e-4f56-9020-13f98b0eaba2",
        replayMetadata: false,
      },
      {
        message: "I will purchase it for sure. 👍",
        time: previousDay,
        senderId: 1,
        replayMetadata: false,
      },
    ],
  },
];


export const getContacts = async () => {
  return contacts
}

// get chats by contact id
export const getChatsByContactId = async (contactId: string) => {
  
   const chat = chats.find(chat => chat.id === contactId)
 const contact =   contacts.find(contact => contact.id === contactId)
    return {
        chat,
        contact
    }
}
// get contact by id 
export const getContactById = async (contactId: string) => {
  return contacts.find(contact => contact.id === contactId)
}


// get profile user
export const getProfileUser = async () => {
  return profileUser
}
export type Chat = typeof chats[number];
export type Contact = typeof contacts[number];
export type ProfileUser = typeof profileUser;