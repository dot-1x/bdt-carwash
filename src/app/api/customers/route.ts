import { prismaClient } from "@/lib/prisma"

export async function GET() {
  const customer = await prismaClient.customer.findMany()
  return Response.json(
    {
      message: "successfuly get customers data",
      data: customer,
    },
    { status: 200 }
  )
}
