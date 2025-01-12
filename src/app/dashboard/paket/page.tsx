import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import PaketModal from "./paket.form"
import { prismaClient } from "@/lib/prisma"
import { ButtonModalAdd } from "@/components/buttons"

export default async function Page() {
  const paket = await prismaClient.paket.findMany()
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Paket</h3>
      <ButtonModalAdd modalName="ModalPaket" />
      <div className="table-container">
        <RowData
          headers={["Nama", "Harga", "Deskripsi", "Aksi"]}
          data={paket.map((v) => {
            return {
              data: [
                v.nama_paket,
                `Rp. ${v.harga.toLocaleString()}`,
                v.deskripsi,
              ],
              data_id: v.id,
            }
          })}
          modalName="ModalPaket"
          tableType="paket"
        />
      </div>
      <ModalFillData modalName="ModalPaket">
        <PaketModal />
      </ModalFillData>
    </div>
  )
}
