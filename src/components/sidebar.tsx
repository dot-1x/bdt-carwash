import Link from "next/link"
import { signOut } from "@/features/auth/auth"
import Image from "next/image"

export default function Sidebar() {
  return (
    <div className="col-lg-3 col-md-4 sidebar">
      <div className="p-3 text-start">
        <Image
          src="/aset/3titik.svg"
          alt="Logo Web"
          className="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
          width={25}
          height={25}
        />
        <br />
        <Image
          src="/aset/CarWash.svg"
          alt="Logo Web"
          className="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
          width={25}
          height={25}
        />
      </div>
      <nav className="nav flex-column">
        <Link href="/dashboard" className="nav-link">
          <i className="bi bi-house">
            <Image
              src="/aset/Dashboard.svg"
              alt=""
              className="icon"
              width={25}
              height={25}
            />
          </i>
          Dashboard
        </Link>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-folder">
              <Image
                src="/aset/kelola data.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
            </i>
            Kelola Data
          </a>
          <nav className="nav flex-column subnav">
            <Link href="/dashboard/user" className="nav-link">
              <Image
                src="/aset/admin.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Admin
            </Link>
            <Link href="/dashboard/karyawan" className="nav-link">
              <Image
                src="/aset/karyawan.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Karyawan
            </Link>
            <Link href="/dashboard/customer" className="nav-link">
              <Image
                src="/aset/costumer.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Customer
            </Link>
            <Link href="/dashboard/kendaraan" className="nav-link">
              <Image
                src="/aset/Kendaraan.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Kendaraan
            </Link>
            <Link href="/dashboard/paket" className="nav-link">
              <Image
                src="/aset/paket.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Paket Pencucian
            </Link>
            <Link href="/dashboard/transaksi" className="nav-link">
              <Image
                src="/aset/transaksi.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Transaksi Pencucian
            </Link>
          </nav>
        </div>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-graph-up">
              <Image
                src="/aset/laporan.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
            </i>
            Laporan
          </a>
          <nav className="nav flex-column subnav">
            <Link href="/dashboard/laporan" className="nav-link">
              <Image
                src="/aset/laporan transaksi.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Laporan Transaksi
            </Link>
            {/* <a href="/dashboard/kinerja" className="nav-link">
              <Image src="/aset/laporan kinerja.svg" alt="" className="icon" />
              Laporan Kinerja
            </a> */}
          </nav>
        </div>
        <div>
          <a href="#" className="nav-link">
            <i className="bi bi-gear">
              <Image
                src="/aset/pengaturan.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
            </i>
            Pengaturan
          </a>
          <nav className="nav flex-column subnav">
            <Link href="/dashboard/account" className="nav-link">
              <Image
                src="/aset/akun.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Akun
            </Link>
            <button
              className="nav-link"
              onClick={async () => {
                "use server"
                await signOut()
              }}
            >
              <Image
                src="/aset/keluar.svg"
                alt=""
                className="icon"
                width={25}
                height={25}
              />
              Keluar
            </button>
          </nav>
        </div>
      </nav>
    </div>
  )
}
