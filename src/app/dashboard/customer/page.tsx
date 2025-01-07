import { ModalFillData } from "@/components/modal"
import { RowData } from "@/components/table"
import Profile from "@/components/profile"
import CustomerModal from "./customer.component"
import { ButtonModalAdd } from "@/components/buttons"

export default function Page() {
  return (
    <>
      <div className="col-lg-9 col-md-8 main-content">
        <Profile />
        <h3 className="h3">Data Customer</h3>
        <ButtonModalAdd modalName="ModalCustomer" />
        <div className="table-container">
          <RowData
            headers={["Nama Lengkap", "Email", "Telephone", "data diri"]}
            data={[
              ["Zex", "zex@localhost.com", "08123455667"],
              ["Zex", "zex@localhost.com", "08123455667"],
            ]}
            modalName="ModalCustomer"
          />
        </div>
        <ModalFillData modalName="ModalCustomer">
          <CustomerModal />
        </ModalFillData>
      </div>
    </>
  )
}
