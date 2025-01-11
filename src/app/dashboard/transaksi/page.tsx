import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import TransaksiModal from "./transaksi.component"
import { prismaClient } from "@/lib/prisma"

export default async function Page() {
  const transaksi = await prismaClient.transaksi.findMany({
    include: { paket: true, customer: true, kendaraan: true },
  })
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Transaksi</h3>
      <button
        className="btn1 btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#TransaksiModal"
      >
        <i className="bi bi-plus-circle"></i> Tambah
      </button>
      <div className="table-container">
        <RowData
          headers={["ID Transaksi", "Kendaraan", "Customer", "Paket", "Aksi"]}
          data={transaksi.map((v) => {
            return {
              data: [
                v.id,
                v.kendaraan.merk,
                v.customer.nama,
                v.paket.nama_paket,
              ],
              data_id: v.id,
            }
          })}
          modalName="TransaksiModal"
        />
      </div>
      <ModalFillData modalName="TransaksiModal">
        <TransaksiModal />
      </ModalFillData>
    </div>
  )
}
