'use server'
import {signIn} from "@/lib/auth";
import { cookies } from "next/headers";
import { getCookie, setCookie } from 'typescript-cookie'
export const loginUser = async (data: any) => {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const classicloginUser = async (data: any) => {
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const {token} = await response.json();
    console.log(token);
    if (token) {
      cookies().set('Authorization', `Bearer ${token}`);
      console.log(cookies().get('Authorization')?.value);
      return token;
    } else {
      throw new Error("Invalid credentials");
    }

  } catch (error) {
    throw new Error(error as string);
  }
}