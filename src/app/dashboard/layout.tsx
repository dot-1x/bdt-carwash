import React from "react"
import Sidebar from "@/components/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
