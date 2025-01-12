"use client"

import { useModalState } from "@/components/modal"
import { Customer, Karyawan, Kendaraan, Paket } from "@prisma/client"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import { transaksiAction } from "./transaksi.action"

async function fetchData(types: "customers" | "paket" | "karyawan") {
  const response = await fetch(`/api/${types}`)
  if (response.ok) return await response.json()
  throw new Error("failed to fetch data")
}
async function fetchKendaraan(customer: number) {
  const response = await fetch(`/api/kendaraan?owner=${customer}`)
  if (response.ok) return await response.json()
  throw new Error("failed to fetch data")
}
export default function TransaksiModal() {
  const [state, action, pending] = useActionState(transaksiAction, undefined)
  const [data, setData] = useState<{
    kendaraan: Kendaraan[]
    customer: Customer[]
    paket: Paket[]
    karyawan: Karyawan[]
  }>({
    kendaraan: [],
    customer: [],
    paket: [],
    karyawan: [],
  })
  const formId = useModalState((state) => state.formId)
  const editing = useModalState((state) => state.isEditing)
  useEffect(() => {
    const fetchDatas = async () => {
      const customer = await fetchData("customers")
      const paket = await fetchData("paket")
      const karyawan = await fetchData("karyawan")
      const kendaraan = await fetchKendaraan(customer.data[0].id)
      try {
        setData({
          kendaraan: kendaraan.data,
          customer: customer.data,
          paket: paket.data,
          karyawan: karyawan.data,
        })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchDatas()
  }, [])
  if (state && !state.status) {
    alert(state.message)
    state.status = true
  }
  return (
    <form className="modal-content" action={action}>
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
          <label htmlFor="customer" className="form-label">
            Customer
          </label>
          <select
            className="form-select"
            aria-label="Pilih Customer"
            name="customer"
            id="customer"
            required={!editing}
            onChange={(ev) => {
              fetchKendaraan(parseInt(ev.currentTarget.value))
                .then((resp) =>
                  setData({
                    ...data,
                    kendaraan: resp.data,
                  })
                )
                .catch((err) => {
                  setData({
                    ...data,
                    kendaraan: [],
                  })
                })
            }}
          >
            {data.customer.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.nama}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="kendaraan" className="form-label">
            Kendaraan
          </label>
          <select
            className="form-select"
            aria-label="Pilih Kendaraan"
            name="kendaraan"
            id="kendaraan"
            required={!editing}
          >
            {data.kendaraan.map((value) => (
              <option key={value.id} value={value.id}>
                {value.merk}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="paket" className="form-label">
            Paket
          </label>
          <select
            className="form-select"
            aria-label="Pilih Paket"
            name="paket"
            id="paket"
            required={!editing}
          >
            {data.paket.map((value) => (
              <option key={value.id} value={value.id}>
                {value.nama_paket}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="karyawan" className="form-label">
            Karyawan
          </label>
          <select
            className="form-select"
            aria-label="Pilih karyawan Transaksi"
            id="karyawan"
            name="karyawan"
            required={!editing}
          >
            {data.karyawan.map((value) => (
              <option key={value.id} value={value.id}>
                {value.nama}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="uang" className="form-label">
            Uang Dibayar
          </label>
          <input
            type="number"
            name="uang"
            id="uang"
            className="form-input"
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
