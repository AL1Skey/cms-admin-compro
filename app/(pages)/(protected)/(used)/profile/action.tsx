"use server"
import { cookies } from "next/headers";
function getToken() {
    const token = cookies().get('Authorization')?.value;
    return token;
}

export const action = async (data:FormData) => {
    const token = getToken();
    console.log("ACTION<<<<<<<<<<<<<<<<<<<<<<<<<<")
    console.log(data)
    const req:{[key:string]:any} = {}
    data.forEach((value, key) => req[key] = value)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/self`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).catch((err) => {
        console.error(err);
    });
    console.log(res);
    return res;
}
