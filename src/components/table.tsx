import { auth } from "@/features/auth/auth"
import { data, ROLE } from "@/lib/types"
import { ButtonTableEdit } from "./buttons"
import { prismaClient } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function RowData({
  headers,
  data,
  withButton = true,
  modalName,
  tableType,
}: {
  headers: string[]
  data: data[]
  withButton?: boolean
  modalName?: string
  tableType?:
    | "customer"
    | "admin"
    | "karyawan"
    | "kendaraan"
    | "paket"
    | "transaksi"
}) {
  if (withButton && !modalName)
    throw new Error("Missing modal name on using button")
  const session = await auth()
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          {headers.map((v, idx) => (
            <th key={"header" + v + idx}>{v}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((values, idx) => {
          const tableData = values.data.map((raw, childIdx) => {
            return (
              <>
                <td key={"subdata" + idx + childIdx}>{raw}</td>
              </>
            )
          })
          return (
            <tr key={"data" + idx}>
              {...tableData}
              {withButton && (
                <td>
                  <ButtonTableEdit
                    modalName={modalName}
                    userid={values.data_id}
                  />
                  {session?.user?.role === ROLE.SUPERADMIN && (
                    <button
                      className="btn3 btn-danger btn-sm"
                      onClick={async () => {
                        "use server"
                        // FORCED, NOT USING HASH MAP BECAUSE TYPE CONFLICT
                        const deleteData = { where: { id: values.data_id } }
                        if (tableType === "admin") {
                          await prismaClient.admin.delete(deleteData)
                          revalidatePath("/dashboard/admin")
                        } else if (tableType === "customer") {
                          await prismaClient.customer.delete(deleteData)
                          revalidatePath("/dashboard/customer")
                        } else if (tableType === "karyawan") {
                          await prismaClient.karyawan.delete(deleteData)
                          revalidatePath("/dashboard/karyawan")
                        } else if (tableType === "kendaraan") {
                          await prismaClient.kendaraan.delete(deleteData)
                          revalidatePath("/dashboard/kendaraan")
                        } else if (tableType === "paket") {
                          await prismaClient.paket.delete(deleteData)
                          revalidatePath("/dashboard/paket")
                        } else if (tableType === "transaksi") {
                          await prismaClient.transaksi.delete(deleteData)
                          revalidatePath("/dashboard/transaksi")
                        }
                      }}
                    >
                      Hapus
                    </button>
                  )}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
