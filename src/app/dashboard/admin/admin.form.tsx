"use client"
import Image from "next/image"
import { useActionState } from "react"
import { adminAction } from "./admin.action"
import { useModalState } from "@/components/modal"

export default function AdminModal() {
  const [state, action, pending] = useActionState(adminAction, undefined)
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)
  return (
    <form className="modal-content" action={action}>
      <div className="modal-header">
        <h5 className="modal-title" id="tambahAdminModalLabel">
          Tambah Admin
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
            src="/aset/admin.svg"
            alt="User Icon"
            className="rounded-circle"
            width={50}
            height={50}
          />
        </div>
        {editing && (
          <div className="mb-3">
            <label htmlFor="form-id" className="form-label">
              Anda Sedang Mengubah Data Dengan ID:
            </label>
            <input
              id="form-id"
              type="text"
              name="form-id"
              value={formId}
              readOnly
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="nama"
            placeholder="Masukkan nama lengkap"
            name="nama"
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Masukkan Username"
            name="username"
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Masukkan password"
            name="password"
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
