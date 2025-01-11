"use client"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import { kendaraanAction } from "./kendaraan.action"
import { Customer } from "@prisma/client"

export default function KendaraanModal() {
  const [message, action, status] = useActionState(kendaraanAction, undefined)
  const [customers, setCustomer] = useState<Customer[]>([])
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
        <div className="mb-3">
          <label htmlFor="pemilik" className="form-label">
            Pemilik
          </label>
          <select className="form-select" aria-label="Default select example">
            <option defaultValue={undefined}>Pilih Pemilik</option>
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
          <input
            type="text"
            className="form-control"
            id="jeniskendaraan"
            placeholder="Masukan jenis kendaraan"
            name="jenisKendaraan"
          />
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="plat" className="form-label">
            Plat nomor
          </label>
          <input
            type="number"
            className="form-control"
            id="plat"
            placeholder="Masukan nomor plat"
            name="plat"
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
