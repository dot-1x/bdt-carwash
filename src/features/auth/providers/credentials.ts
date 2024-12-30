import { ROLE } from "@/lib/types"
import Credentials from "next-auth/providers/credentials"

export default Credentials({
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
      nama: "Kocheng",
      role: ROLE.ADMIN,
      shift: null,
      username: "kocheng",
    }
  },
})
