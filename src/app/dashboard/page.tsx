import { signOut } from "@/features/auth/auth"

export default function Page() {
  return (
    <>
      <h1>Selamat Datang</h1>
      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/login" })
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  )
}
