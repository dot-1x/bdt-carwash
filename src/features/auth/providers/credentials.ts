import { ROLE } from "@/lib/types"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prismaClient } from "@/lib/prisma"

const roleMap: { [k: string]: ROLE } = {
  SUPERADMIN: ROLE.SUPERADMIN,
  ADMIN: ROLE.ADMIN,
}

export default Credentials({
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const user = await prismaClient.admin.findUnique({
      where: { username: credentials.username as string },
    })
    if (!user) return null
    const verified = await bcrypt.compare(
      credentials.password as string,
      user.password
    )
    if (!verified) return null

    return {
      name: user.nama,
      username: user.username,
      role: roleMap[user.role.toString()],
    }
  },
})
