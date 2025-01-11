"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { Karyawan } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function karyawanAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState | undefined> {
  const data = {
    nama: formData.get("namaLengkap"),
    status: formData.get("status"),
    shift: formData.get("shift"),
  }
  await prismaClient.karyawan.upsert({
    create: data as Karyawan,
    where: {
      id: parseInt(formData.get("form-id")?.toString() as string) || -1,
    },
    update: filterObject(data),
  })
  revalidatePath("/dashboard/karyawan")
  return {
    status: true,
    message: "data berhasil diupdate",
  }
}
