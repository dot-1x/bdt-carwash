import { Role } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: number
    nama: string
    username: string
    role: Role
  }
}
