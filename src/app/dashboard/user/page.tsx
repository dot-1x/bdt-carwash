import { auth } from "@/features/auth/auth"

export default async function Page() {
  const session = await auth()

  return <p>hello {session?.user?.name}</p>
}
