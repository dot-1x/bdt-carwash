"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { JenisKendaraan, Kendaraan } from "@prisma/client"
import { revalidatePath } from "next/cache"

const jenisMap: { [k: string]: JenisKendaraan } = {
  MOBIL: JenisKendaraan.MOBIL,
  MOTOR: JenisKendaraan.MOTOR,
  BUS: JenisKendaraan.BUS,
  TRUK: JenisKendaraan.TRUK,
}

export async function kendaraanAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState> {
  const jenis: string | null = formData.get("jeniskendaraan") as string
  const data = {
    id_customer: parseInt(formData.get("pemilik") as string),
    jenis: typeof jenis === "string" ? jenisMap[jenis] : null,
    merk: formData.get("merek") as string,
    plat: formData.get("plat") as string,
  }

  await prismaClient.kendaraan.upsert({
    create: data as Kendaraan,
    where: {
      id: parseInt(formData.get("form-id")?.toString() as string) || -1,
    },
    update: filterObject(data),
  })
  revalidatePath("/dashboard/kendaraan")
  return {
    status: true,
    message: "Data berhasil di update",
  }
}
