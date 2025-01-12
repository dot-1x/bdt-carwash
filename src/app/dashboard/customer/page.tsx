import { ModalFillData } from "@/components/modal"
import { RowData } from "@/components/table"
import Profile from "@/components/profile"
import CustomerModal from "./customer.form"
import { ButtonModalAdd } from "@/components/buttons"
import { prismaClient } from "@/lib/prisma"

export default async function Page() {
  const customer = await prismaClient.customer.findMany()
  return (
    <>
      <div className="col-lg-9 col-md-8 main-content">
        <Profile />
        <h3 className="h3">Data Customer</h3>
        <ButtonModalAdd modalName="ModalCustomer" />
        <div className="table-container">
          <RowData
            headers={["Nama Lengkap", "Telephon", "Alamat", "data diri"]}
            data={customer.map((v) => {
              return { data: [v.nama, v.telephon, v.alamat], data_id: v.id }
            })}
            modalName="ModalCustomer"
            tableType="customer"
          />
        </div>
        <ModalFillData modalName="ModalCustomer">
          <CustomerModal />
        </ModalFillData>
      </div>
    </>
  )
}
