import React from "react"
import { create } from "zustand"

export const useModalState = create<{
  formId: number
  isEditing: boolean
  setFormId: (formId: number) => void
  setEdit: (editing: boolean) => void
}>((set) => ({
  formId: -1,
  isEditing: false,
  setFormId: (formId: number) => set(() => ({ formId: formId })),
  setEdit: (editing: boolean) => set(() => ({ isEditing: editing })),
}))

export function ModalFillData({
  children,
  modalName,
}: {
  children: Readonly<React.ReactNode>
  modalName: string
}) {
  return (
    <div
      className="modal fade"
      id={`${modalName}`}
      tabIndex={-1}
      aria-labelledby={modalName + "ModalLabel"}
      aria-hidden={true}
    >
      <div className="modal-dialog modal-dialog-centered">{children}</div>
    </div>
  )
}
