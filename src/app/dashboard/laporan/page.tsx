import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import "./laporan.style.css"

export default function Page() {
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
          headers={["no", "tanggal", "pelanggan", "total", "status"]}
          data={[["1", "2024-12-31", "Zex", "25000", "selesai"]]}
          withButton={false}
        />
      </div>
    </div>
  )
}
