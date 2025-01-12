"use server"

import { prismaClient } from "@/lib/prisma"
import { formState } from "@/lib/types"
import { filterObject } from "@/lib/utils"
import { Transaksi } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function transaksiAction(
  state: formState | undefined,
  formData: FormData
): Promise<formState> {
  const paket = await prismaClient.paket.findUnique({
    where: { id: parseInt(formData.get("paket") as string) },
  })
  if (!paket)
    return {
      status: false,
      message: "paket tidak ditemukan",
    }
  const total_harga = paket.harga * 1.12
  const uang_dibayar = parseFloat(formData.get("uang") as string)
  if (uang_dibayar < total_harga)
    return {
      status: false,
      message: "Uang tidak cukup!",
    }
  const data = {
    id_customer: parseInt(formData.get("customer") as string),
    id_kendaraan: parseInt(formData.get("kendaraan") as string),
    id_paket: paket.id,
    id_karyawan: parseInt(formData.get("karyawan") as string),
    total_harga,
    uang_dibayar,
  }
  const formId = parseInt(formData.get("form-id")?.toString() as string)
  if (!formId) {
    await prismaClient.transaksi.create({
      data: data,
    })
  } else {
    await prismaClient.transaksi.update({
      data: filterObject(data),
      where: { id: formId },
    })
  }
  revalidatePath("/dashboard/transaksi")
  return {
    status: true,
    message: "data berhasil diupdate",
  }
}
