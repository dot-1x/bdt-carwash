import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import KendaraanModal from "./kendaraan.form"
import { prismaClient } from "@/lib/prisma"
import { ButtonModalAdd } from "@/components/buttons"

export default async function Page() {
  const kendaraan = await prismaClient.kendaraan.findMany({
    include: { customer: true },
  })
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Kendaraan</h3>
      <ButtonModalAdd modalName="ModalKendaraan" />
      <div className="table-container">
        <RowData
          headers={["No. Plat", "Jenis", "Pemilik", "Merk", "data diri"]}
          data={kendaraan.map((v) => {
            return {
              data: [v.plat, v.jenis, v.customer.nama, v.merk],
              data_id: v.id,
            }
          })}
          modalName="ModalKendaraan"
          tableType="kendaraan"
        />
      </div>
      <ModalFillData modalName="ModalKendaraan">
        <KendaraanModal />
      </ModalFillData>
    </div>
  )
}
