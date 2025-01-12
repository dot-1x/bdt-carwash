import { prismaClient } from "@/lib/prisma"

export async function GET() {
  const paket = await prismaClient.paket.findMany()
  return Response.json(
    {
      message: "successfuly retrieved packages",
      data: paket,
    },
    {
      status: 200,
    }
  )
}
