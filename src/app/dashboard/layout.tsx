import React from "react"
import Sidebar from "@/components/sidebar"
import { ModalAddData } from "@/components/modal"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        {children}
        <ModalAddData />
      </div>
    </div>
  )
}
