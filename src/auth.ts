import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ROLE } from "@/lib/types"
import { NextResponse } from "next/server"

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email !== process.env.EMAIL ||
          credentials.password !== process.env.PASSWORD
        ) {
          return null
        }
        return {
          email: "test@gmail.com",
          id: "2",
          image: null,
          name: "Kocheng",
          role: ROLE.ADMIN,
          shift: null,
        }
      },
    }),
  ],
  callbacks: {
    async authorized({ request, auth }) {
      const url = request.nextUrl
      if (auth && url.pathname.includes("/login")) {
        return NextResponse.redirect(new URL("/dashboard", url.origin), 302)
      }
      if (url.pathname.includes("/dashboard")) {
        return !!auth
      }
      return true
    },
  },
})
