import { auth } from "@/features/auth/auth"
import { ROLE } from "@/lib/types"
import Image from "next/image"
import { ButtonTableEdit } from "./buttons"

export async function RowData({
  headers,
  data,
  modalName,
  withButton = true,
}: {
  headers: string[]
  data: string[][]
  modalName?: string
  withButton?: boolean
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
          const tableData = values.map((raw, childIdx) => {
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
                  <ButtonTableEdit modalName={modalName} userid={idx} />
                  {session?.user?.role === ROLE.SUPERADMIN && (
                    <button className="btn3 btn-danger btn-sm">
                      <i className="bi bi-trash">
                        <Image
                          src="/aset/hapus.svg"
                          alt=""
                          width="0"
                          height="0"
                        />
                      </i>
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
