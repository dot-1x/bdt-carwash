import { ModalFillData } from "@/components/modal"
import { RowData } from "@/components/table"
import Profile from "@/components/profile"
import { ButtonModalAdd } from "@/components/buttons"
import { prismaClient } from "@/lib/prisma"
import AdminModal from "./admin.form"

export default async function Page() {
  const admins = await prismaClient.admin.findMany({
    where: {
      role: "ADMIN",
    },
  })
  return (
    <>
      <div className="col-lg-9 col-md-8 main-content">
        <Profile />
        <h3 className="h3">Data Admin</h3>
        <ButtonModalAdd modalName="ModalAdmin" />
        <div className="table-container">
          <RowData
            headers={["Nama", "Username", "Role", "Action"]}
            data={admins.map((v) => {
              return { data: [v.nama, v.username, v.role], data_id: v.id }
            })}
            modalName="ModalAdmin"
            tableType="admin"
          />
        </div>
        <ModalFillData modalName="ModalAdmin">
          <AdminModal />
        </ModalFillData>
      </div>
    </>
  )
}
