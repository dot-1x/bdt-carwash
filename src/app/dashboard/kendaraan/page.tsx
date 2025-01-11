import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import KendaraanModal from "./kendaraan.component"
import { prismaClient } from "@/lib/prisma"

export default async function Page() {
  const kendaraan = await prismaClient.kendaraan.findMany({
    include: { customer: true },
  })
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Kendaraan</h3>
      <button
        className="btn1 btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#ModalKendaraan"
      >
        <i className="bi bi-plus-circle"></i> Tambah
      </button>
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
        />
      </div>
      <ModalFillData modalName="ModalKendaraan">
        <KendaraanModal />
      </ModalFillData>
    </div>
  )
}
