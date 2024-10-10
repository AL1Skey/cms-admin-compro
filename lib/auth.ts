import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, type User } from "./data";
import { comparePassword } from "./bcrypt";


export const { auth, handlers, signIn, signOut } = NextAuth({

  session: {
    strategy: "jwt",
  },
  providers: [
    Google,
    GitHub,
     CredentialsProvider({
            credentials: {
              
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;
                
                try {
                    const url = `${process.env.NEXT_PUBLIC_API_URL}/public/user?email=${credentials.email}`;
                    const user = await fetch(url).then((res) => res.json());
                    if (user) {
                        const isMatch = comparePassword(`${credentials.password}`,user?.password);

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error as string);
                }
            },
        }),
   
  ],
});
