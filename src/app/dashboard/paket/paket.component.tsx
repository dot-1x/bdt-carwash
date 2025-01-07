import Image from "next/image"

export default function PaketModal() {
  return (
    <form className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="tambahAdminModalLabel">
          Tambah/Ubah Paket Pencucian
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
            src="/aset/paket.svg"
            alt="User Icon"
            className="rounded-circle"
            height="0"
            width="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaPaket" className="form-label">
            Nama Paket
          </label>
          <input
            type="text"
            className="form-control"
            id="namaPaket"
            placeholder="Masukkan nama paket"
            name="namaPaket"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="harga" className="form-label">
            Harga
          </label>
          <input
            type="number"
            min="1"
            max="3"
            className="form-control"
            id="harga"
            placeholder="Pilih harga"
            name="harga"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Deskripsi
          </label>
          <input
            type="text"
            className="form-control"
            id="deskripsi"
            placeholder="Masukan deskripsi"
            name="deskripsi"
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
