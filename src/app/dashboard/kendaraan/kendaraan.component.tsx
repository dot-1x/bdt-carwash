"use client"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import { kendaraanAction } from "./kendaraan.action"
import { Customer, JenisKendaraan } from "@prisma/client"
import { useModalState } from "@/components/modal"

export default function KendaraanModal() {
  const [state, action, status] = useActionState(kendaraanAction, undefined)
  const [customers, setCustomer] = useState<Customer[]>([])
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("/api/customers")
        if (response.ok) {
          const data = await response.json()
          setCustomer(data.data)
        } else {
          console.error("Failed to fetch customers:", response.statusText)
        }
      } catch (error) {
        console.error("Error fetching customers:", error)
      }
    }

    fetchCustomers()
  }, [])
  return (
    <form className="modal-content" action={action}>
      <div className="modal-header">
        <h5 className="modal-title" id="tambahAdminModalLabel">
          Tambah/Ubah Data Kendaraan
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
            src="/aset/Kendaraan.svg"
            alt="User Icon"
            className="rounded-circle"
            width="0"
            height="0"
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
          <label htmlFor="pemilik" className="form-label">
            Pemilik
          </label>
          <select
            className="form-select"
            aria-label="Pilih Pemilik Kendaraan"
            name="pemilik"
            id="pemilik"
            required={!editing}
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.nama}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="jeniskendaraan" className="form-label">
            Jenis Kendaraan
          </label>
          <select
            className="form-select"
            aria-label="Pilih jenis Kendaraan"
            name="jeniskendaraan"
            id="jeniskendaraan"
            required={!editing}
          >
            <option value="MOTOR">MOTOR</option>
            <option value="MOBIL">MOBIL</option>
            <option value="BUS">BUS</option>
            <option value="TRUK">TRUK</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="merek" className="form-label">
            Merek
          </label>
          <input
            type="text"
            className="form-control"
            id="merek"
            placeholder="Masukan merek"
            name="merek"
            required={!editing}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="plat" className="form-label">
            Plat nomor
          </label>
          <input
            type="text"
            className="form-control"
            id="plat"
            placeholder="Masukan nomor plat"
            name="plat"
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
