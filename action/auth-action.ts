'use server'
import {signIn} from "@/lib/auth";
import { cookies } from "next/headers";
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

export const forgotPasswordAction = async (data: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};


export const resetPasswordAction = async (data: any) => {
  const id = data.id;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reset-password/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};