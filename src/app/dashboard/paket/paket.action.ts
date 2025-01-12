"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { Paket } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function paketAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState> {
  const data = {
    nama_paket: formData.get("namaPaket") as string,
    harga: parseInt(formData.get("harga") as string),
    deskripsi: formData.get("deskripsi") as string,
  }
  const formId = parseInt(formData.get("form-id")?.toString() as string)
  if (!formId) {
    await prismaClient.paket.create({
      data: data,
    })
  } else {
    await prismaClient.paket.update({
      data: filterObject(data),
      where: {
        id: formId,
      },
    })
  }
  revalidatePath("/dashboard/paket")
  return {
    status: true,
    message: "data berhasil diupdate",
  }
}
