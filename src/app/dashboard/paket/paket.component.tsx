"use client"
import { useModalState } from "@/components/modal"
import Image from "next/image"
import { useActionState } from "react"
import { paketAction } from "./paket.action"

export default function PaketModal() {
  const [state, action, status] = useActionState(paketAction, undefined)
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)

  return (
    <form className="modal-content" action={action}>
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
        {editing && (
          <div className="mb-3">
            <label htmlFor="form-id" className="form-label">
              Anda Sedang Mengubah Data Dengan ID:
            </label>
            <input
              id="form-id"
              type="number"
              name="form-id"
              value={formId}
              readOnly
            />
          </div>
        )}
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
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="harga" className="form-label">
            Harga
          </label>
          <input
            type="number"
            className="form-control"
            id="harga"
            placeholder="Pilih harga"
            name="harga"
            required={!editing}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  )
}
