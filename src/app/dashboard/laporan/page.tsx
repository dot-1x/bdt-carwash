import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import "./laporan.style.css"
import { prismaClient } from "@/lib/prisma"

export default async function Page() {
  const transaksi = await prismaClient.transaksi.findMany({
    include: {
      customer: true,
    },
  })
  return (
    <div className="col-lg-9 col-md-8 main-content">
      <Profile />
      <h3 className="h3 custom-title">Laporan Transaksi</h3>
      <form className="form-custom">
        <label>
          Tanggal Awal
          <input type="date" name="start_date" placeholder="" />
        </label>

        <label>
          Tanggal Akhir
          <input type="date" id="end_date" placeholder="" />
        </label>
      </form>

      <button className="btn1 btn-primary mb-3">
        <i className="bi bi-plus-circle"></i> Ekspor ke Excel
      </button>
      <button className="btn2 btn-primary mb-3">
        <i className="bi bi-plus-circle"></i> Ekspor ke Pdf
      </button>

      <div className="table-container">
        <RowData
          headers={["No. Transaksi", "Pelanggan", "Total", "Tanggal"]}
          data={transaksi.map((v) => {
            return {
              data: [
                v.id,
                v.customer.nama,
                `Rp. ${v.total_harga.toLocaleString()}`,
                v.tanggal.toLocaleString(),
              ],
              data_id: v.id,
            }
          })}
          withButton={false}
        />
      </div>
    </div>
  )
}
