import { auth } from "@/features/auth/auth"

export default async function Page() {
  const session = await auth()
  console.log(session?.user?.role)
  return <p>hello {session?.user?.name}</p>
}
