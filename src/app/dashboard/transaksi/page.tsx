import { ModalFillData } from "@/components/modal"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import TransaksiModal from "./transaksi.component"

export default function Page() {
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
          headers={["no", "nama", "shift", "status", "data diri"]}
          data={[["1", "zex", "Malam", "aktif"]]}
          modalName="TransaksiModal"
        />
      </div>
      <ModalFillData modalName="TransaksiModal">
        <TransaksiModal />
      </ModalFillData>
    </div>
  )
}
