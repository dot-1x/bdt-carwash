"use client"

import { useActionState } from "react"
import { customerAction } from "./customer.action"
import Image from "next/image"
import { useModalState } from "@/components/modal"

export default function CustomerModal() {
  const [state, action, isPending] = useActionState(customerAction, {
    status: false,
    message: "gagal",
  })
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)
  return (
    <form className="modal-content" action={action}>
      <div className="modal-header">
        <h5 className="modal-title">Tambah/Ubah Data Customer</h5>
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
            src="/aset/costumer.svg"
            alt="User Icon"
            className="rounded-circle"
            width="0"
            height="0"
          />
        </div>
        {editing && (
          <div className="mb-3">
            <label htmlFor="namaLengkap" className="form-label">
              Anda Sedang Mengubah Data Dengan ID:
            </label>
            <input type="text" name="form-id" value={formId} disabled />
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
          <label htmlFor="alamat" className="form-label">
            Alamat
          </label>
          <input
            type="text"
            className="form-control"
            id="alamat"
            placeholder="Masukkan alamat"
            name="alamat"
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telepon" className="form-label">
            Telephone
          </label>
          <input
            type="tel"
            className="form-control"
            id="tel"
            placeholder="Masukkan nomor anda"
            name="tel"
            required={!editing}
          />
        </div>
        {editing && <input type="hidden" name="form-id" value={formId} />}
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
          aria-disabled={isPending}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
