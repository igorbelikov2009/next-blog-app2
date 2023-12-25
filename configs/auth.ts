// https://cloud.google.com/  заходим там в консоль и

import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"; // Возможность ввести логин, пароль и т.д.
import { users } from "@/data/users";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET!, // ! тоже самое as string
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find((user) => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser; // Изымаем пароль у пользователя
          return userWithoutPass as User; // Возвращаем пользователя без пароля
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
};
