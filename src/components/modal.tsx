export function ModalAddData() {
  return (
    <div
      className="modal fade"
      id="MainModal"
      tabIndex={-1}
      aria-labelledby="MainModalLabel"
      aria-hidden={true}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="MainModalLabel">
              Tambah Data
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
              <img
                src="/aset/karyawan.svg"
                alt="User Icon"
                className="rounded-circle"
              />
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="namaLengkap" className="form-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namaLengkap"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="shift" className="form-label">
                  Shift
                </label>
                <input
                  type="number"
                  min="1"
                  max="3"
                  className="form-control"
                  id="email"
                  placeholder="Pilih shift anda"
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
                  placeholder="Masukan status anda"
                />
              </div>
            </form>
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
        </div>
      </div>
    </div>
  )
}
