import { prismaClient } from "@/lib/prisma"
import { type NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const owner = req.nextUrl.searchParams.get("owner")
  if (!owner)
    return Response.json(
      { message: "missing query parameter owner", data: [] },
      { status: 400 }
    )
  const kendaraan = await prismaClient.kendaraan.findMany({
    where: { id_customer: parseInt(owner) },
  })
  return Response.json(
    {
      message: kendaraan.length
        ? "successfuly retrieved cars"
        : "data not found",
      data: kendaraan,
    },
    {
      status: kendaraan.length ? 200 : 404,
    }
  )
}
