import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()

  return <p>hello {session?.user?.name}</p>
}
