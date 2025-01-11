import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import PaketModal from "./paket.component"
import { prismaClient } from "@/lib/prisma"

export default async function Page() {
  const paket = await prismaClient.paket.findMany()
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Paket</h3>
      <button
        className="btn1 btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#ModalPaket"
      >
        <i className="bi bi-plus-circle"></i> Tambah
      </button>
      <div className="table-container">
        <RowData
          headers={["Nama", "Harga", "Deskripsi", "Ubah"]}
          data={paket.map((v) => {
            return { data: [v.nama_paket, v.harga, v.deskripsi], data_id: v.id }
          })}
          modalName="ModalPaket"
        />
      </div>
      <ModalFillData modalName="ModalPaket">
        <PaketModal />
      </ModalFillData>
    </div>
  )
}
