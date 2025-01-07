"use client"
import { useActionState } from "react"
import { karyawanAction } from "./karyawan.action"
import Image from "next/image"
export default function KaryawanModal() {
  const [message, action, status] = useActionState(karyawanAction, undefined)
  return (
    <form className="modal-content" action={action}>
      <div className="modal-header">
        <h5 className="modal-title">Tambah/Ubah Data Karyawan</h5>
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
            src="/aset/karyawan.svg"
            alt="User Icon"
            className="rounded-circle"
            height="0"
            width="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaLengkap" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="namaLengkap"
            placeholder="Masukkan nama lengkap"
            name="namaLengkap"
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
            id="shift"
            placeholder="Pilih shift anda"
            name="shift"
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
        <button
          type="submit"
          className="btn btn-primary"
          aria-disabled={status}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
