"use client"
import { useActionState } from "react"
import { karyawanAction } from "./karyawan.action"
import Image from "next/image"
import { useModalState } from "@/components/modal"

export default function KaryawanModal() {
  const [state, action, status] = useActionState(karyawanAction, undefined)
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)
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
        {editing && (
          <div className="mb-3">
            <label htmlFor="namaLengkap" className="form-label">
              Anda Sedang Mengubah Data Dengan ID:
            </label>
            <input type="text" name="form-id" value={formId} readOnly />
          </div>
        )}
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
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shift" className="form-label">
            Shift
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            required={!editing}
            name="shift"
          >
            <option defaultChecked value="Pagi">
              pagi
            </option>
            <option defaultChecked value="Siang">
              siang
            </option>
            <option defaultChecked value="Sore">
              sore
            </option>
          </select>
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
            required={!editing}
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
