"use client"

import Image from "next/image"
import { useModalState } from "./modal"

export function ButtonTableEdit({
  userid,
  modalName,
}: {
  userid: number
  modalName?: string
}) {
  const setFormId = useModalState((state) => state.setFormId)
  const setEdit = useModalState((state) => state.setEdit)
  return (
    <button
      className="btn2 btn-success btn-sm"
      data-bs-toggle="modal"
      data-bs-target={`#${modalName}`}
      onClick={() => {
        setFormId(userid)
        setEdit(true)
      }}
    >
      <i className="bi bi-pencil">
        <Image src="/aset/edit.svg" alt="" width="0" height="0" />
      </i>
      Edit
    </button>
  )
}

export function ButtonModalAdd({ modalName }: { modalName?: string }) {
  const setEdit = useModalState((state) => state.setEdit)
  return (
    <button
      className="btn1 btn-primary mb-3"
      data-bs-toggle="modal"
      data-bs-target={`#${modalName}`}
      onClick={() => setEdit(false)}
    >
      <i className="bi bi-plus-circle"></i> Tambah
    </button>
  )
}
