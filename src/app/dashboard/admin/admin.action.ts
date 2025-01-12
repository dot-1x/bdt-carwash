"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { Role } from "@prisma/client"
import bcrypt, { genSalt } from "bcryptjs"
import { revalidatePath } from "next/cache"
export async function adminAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState> {
  const hashed = await bcrypt.hash(
    formData.get("password") as string,
    await genSalt(6)
  )
  const data = {
    username: formData.get("username") as string,
    nama: formData.get("nama") as string,
    password: hashed,
    role: Role.ADMIN,
  }
  await prismaClient.admin.upsert({
    create: data,
    where: {
      id: parseInt(formData.get("form-id")?.toString() as string) || -1,
    },
    update: filterObject(data),
  })
  revalidatePath("/dashboard/admin")
  return {
    status: true,
    message: "data berhasil diubah",
  }
}
