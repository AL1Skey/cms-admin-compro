import { mails, Mail} from "./data"

// get mail 

export const getMail = async () => {
    return mails
}


// get mail by id 

export const getMailById = async (mailId: string) => {
    return mails.find(mail => mail.id === mailId)
}