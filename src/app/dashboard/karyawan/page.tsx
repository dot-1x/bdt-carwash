import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import KaryawanModal from "./karwayan.form"
import { prismaClient } from "@/lib/prisma"
import { ButtonModalAdd } from "@/components/buttons"

export default async function Page() {
  const karyawan = await prismaClient.karyawan.findMany()

  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Karyawan</h3>
      <ButtonModalAdd modalName="ModalKaryawan" />
      <div className="table-container">
        <RowData
          headers={["Nama", "Shift", "Status", "Aksi"]}
          data={karyawan.map((v) => {
            return { data: [v.nama, v.shift, v.status], data_id: v.id }
          })}
          modalName="ModalKaryawan"
          tableType="karyawan"
        />
      </div>
      <ModalFillData modalName="ModalKaryawan">
        <KaryawanModal />
      </ModalFillData>
    </div>
  )
}
