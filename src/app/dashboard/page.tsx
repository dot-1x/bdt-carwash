import { signOut } from "@/auth"

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
