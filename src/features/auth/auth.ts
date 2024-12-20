import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import credentials from "./providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [credentials],
  callbacks: {
    async authorized({ request, auth }) {
      const url = request.nextUrl
      if (auth && url.pathname.includes("/login")) {
        return NextResponse.redirect(new URL("/dashboard", url.origin), 302)
      }
      return !!auth
    },
  },
  session: {
    maxAge: 60 * 60 * 2,
  },
})
