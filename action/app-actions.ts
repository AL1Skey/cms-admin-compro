'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { postMessage } from "@/app/[locale]/(protected)/(unused)/app/chat/utils";


export const  postMessageAction = async (id: string, message: string,) => {
    const response = await postMessage(id, message)
    revalidatePath("/");
     return response;
   
}
