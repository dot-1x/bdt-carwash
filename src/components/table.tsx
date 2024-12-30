import { auth } from "@/features/auth/auth"
export async function RowData({
  headers,
  data,
}: {
  headers: string[]
  data: string[][]
}) {
  const session = await auth()
  session?.user?.role
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
              <td>
                <button
                  className="btn2 btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#MainModal"
                >
                  <i className="bi bi-pencil">
                    <img src="/aset/edit.svg" alt="" />
                  </i>
                  Edit
                </button>
                <button className="btn3 btn-danger btn-sm">
                  <i className="bi bi-trash">
                    <img src="/aset/hapus.svg" alt="" />
                  </i>
                  Hapus
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
