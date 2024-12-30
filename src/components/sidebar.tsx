import Link from "next/link"
import { signOut } from "@/features/auth/auth"

export default function Sidebar() {
  return (
    <div className="col-lg-3 col-md-4 sidebar">
      <div className="p-3 text-start">
        <img
          src="/aset/3titik.svg"
          alt="Logo Web"
          className="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
        />
        <br />
        <img
          src="/aset/CarWash.svg"
          alt="Logo Web"
          className="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
        />
      </div>
      <nav className="nav flex-column">
        <Link href="/dashboard" className="nav-link">
          <i className="bi bi-house">
            <img src="/aset/Dashboard.svg" alt="" className="icon" />
          </i>
          Dashboard
        </Link>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-folder">
              <img src="/aset/kelola data.svg" alt="" className="icon" />
            </i>
            Kelola Data
          </a>
          <nav className="nav flex-column subnav">
            <Link href="/dashboard/user" className="nav-link">
              <img src="/aset/admin.svg" alt="" className="icon" />
              Admin
            </Link>
            <Link href="/dashboard/karyawan" className="nav-link">
              <img src="/aset/karyawan.svg" alt="" className="icon" />
              Karyawan
            </Link>
            <Link href="/dashboard/customer" className="nav-link">
              <img src="/aset/costumer.svg" alt="" className="icon" />
              Customer
            </Link>
            <Link href="/dashboard/kendaraan" className="nav-link">
              <img src="/aset/Kendaraan.svg" alt="" className="icon" />
              Kendaraan
            </Link>
            <Link href="/dashboard/paket" className="nav-link">
              <img src="/aset/paket.svg" alt="" className="icon" />
              Paket Pencucian
            </Link>
            <Link href="/dashboard/transaksi" className="nav-link">
              <img src="/aset/transaksi.svg" alt="" className="icon" />
              Transaksi Pencucian
            </Link>
          </nav>
        </div>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-graph-up">
              <img src="/aset/laporan.svg" alt="" className="icon" />
            </i>
            Laporan
          </a>
          <nav className="nav flex-column subnav">
            <a href="laporan_transaksi.html" className="nav-link">
              <img src="/aset/laporan transaksi.svg" alt="" className="icon" />
              Laporan Transaksi
            </a>
            <a href="laporan_kinerja.html" className="nav-link">
              <img src="/aset/laporan kinerja.svg" alt="" className="icon" />
              Laporan Kinerja
            </a>
          </nav>
        </div>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-gear">
              <img src="/aset/pengaturan.svg" alt="" className="icon" />
            </i>
            Pengaturan
          </a>
          <nav className="nav flex-column subnav">
            <a href="akun.html" className="nav-link">
              <img src="/aset/akun.svg" alt="" className="icon" />
              Akun
            </a>
            <button
              className="nav-link"
              onClick={async () => {
                "use server"
                await signOut()
              }}
            >
              <img src="/aset/keluar.svg" alt="" className="icon" />
              Keluar
            </button>
          </nav>
        </div>
      </nav>
    </div>
  )
}
