import { chats, contacts, profileUser } from '@/app/api/chat/data'
import { baseURL } from '@/config'


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

// post message
export const postMessage = async (id: string, data: any) => {
  const res = await fetch(`${baseURL}/chat/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Error creating task`);
  }
  return res.json();
}