import { cookies } from "next/headers"



export const getToken = ()=>{
    const token= cookies().get("Authorization")?.value
    return token
}
export const deleteToken = ()=>{
    cookies().delete("Authorization")
    if(!cookies().get("Authorization")?.value){
        return true
    }
    return false
}