"use server"

import { signIn } from "@/features/auth/auth"
import { AuthError } from "next-auth"

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: (formData.get("cbUrl") as string) || "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Username atau Password salah!"
        default:
          return "Something went wrong."
      }
    }
    throw error
  }
}
