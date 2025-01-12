import { prismaClient } from "@/lib/prisma"

export async function GET() {
  const karyawan = await prismaClient.karyawan.findMany()
  return Response.json(
    {
      message: "successfuly retrieved karyawan",
      data: karyawan,
    },
    {
      status: 200,
    }
  )
}
