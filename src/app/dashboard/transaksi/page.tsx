import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import TransaksiModal from "./transaksi.component"
import { prismaClient } from "@/lib/prisma"
import { ButtonModalAdd } from "@/components/buttons"

export default async function Page() {
  const transaksi = await prismaClient.transaksi.findMany({
    include: { paket: true, customer: true, kendaraan: true, karyawan: true },
  })
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3">Data Transaksi</h3>
      <ButtonModalAdd modalName="TransaksiModal" />
      <div className="table-container">
        <RowData
          headers={[
            "ID Transaksi",
            "Kendaraan",
            "Customer",
            "Paket",
            "Karyawan",
            "Total Harga",
            "Uang Dibayar",
            "Aksi",
          ]}
          data={transaksi.map((v) => {
            return {
              data: [
                v.id,
                v.kendaraan.merk,
                v.customer.nama,
                v.paket.nama_paket,
                v.karyawan.nama,
                `Rp. ${v.total_harga.toLocaleString()}`,
                `Rp. ${v.uang_dibayar.toLocaleString()}`,
              ],
              data_id: v.id,
            }
          })}
          modalName="TransaksiModal"
          tableType="transaksi"
        />
      </div>
      <ModalFillData modalName="TransaksiModal">
        <TransaksiModal />
      </ModalFillData>
    </div>
  )
}
