import { signOut } from "@/auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}

export default function Page() {
  return (
    <>
      <h1>Selamat Datang</h1>
      <SignOut />
    </>
  )
}
