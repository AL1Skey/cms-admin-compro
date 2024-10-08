"use server"
import { cookies } from "next/headers";
function getToken() {
    const token = cookies().get('Authorization')?.value;
    return token;
}

export const action = async (data:FormData) => {
    const token = getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-us`, {
        method: "PUT",
        headers: {
            Authorization: `${token}`,
        },
        body: data,
    }).then((res) => res.json()).catch((err) => {
        console.error(err);
    });
    console.log(res);
    return res;
}
