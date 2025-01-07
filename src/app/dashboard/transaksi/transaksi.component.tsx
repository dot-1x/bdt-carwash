import Image from "next/image"

export default function TransaksiModal() {
  return (
    <form className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="tambahAdminModalLabel">
          Tambah/Ubah Transaksi
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="form-icon">
          <Image
            src="/aset/transaksi.svg"
            alt="User Icon"
            className="rounded-circle"
            height="0"
            width="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customer" className="form-label">
            Customer
          </label>
          <input
            type="number"
            className="form-control"
            id="customer"
            placeholder="Masukan ID customer"
            name="customer"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="kendaraan" className="form-label">
            Kendaraan
          </label>
          <input
            type="text"
            className="form-control"
            id="kendaraan"
            placeholder="Masukan jenis kendaraan"
            name="kendaraan"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paket" className="form-label">
            Paket
          </label>
          <input
            type="text"
            className="form-control"
            id="paket"
            placeholder="Masukan paket"
            name="paket"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            placeholder="Masukan status"
            name="status"
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Batal
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}
