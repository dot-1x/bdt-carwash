"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { Customer } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function customerAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState> {
  const data = {
    nama: formData.get("namaLengkap"),
    alamat: formData.get("alamat"),
    telephon: formData.get("tel")?.toString(),
  }
  const update = filterObject(data)
  await prismaClient.customer.upsert({
    where: {
      id: parseInt(formData.get("form-id")?.toString() as string) || -1,
    },
    create: data as Customer,
    update: update,
  })
  revalidatePath("/dashboard/customer")
  return { status: true, message: "Berhasil" }
}
