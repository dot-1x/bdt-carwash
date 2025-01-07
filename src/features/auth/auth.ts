import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import credentials from "./providers/credentials"
import { ROLE } from "@/lib/types"

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
    async session({ session, token }) {
      session.user.role = token.user?.role as ROLE

      return session
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user: user,
        }
      }
      return token
    },
  },
  session: {
    maxAge: 60 * 60 * 2,
    strategy: "jwt",
  },
})
