import Image from "next/image"
import Profile from "@/components/profile"
import { RowData } from "@/components/table"
import { auth } from "@/features/auth/auth"

export default async function Page() {
  const session = await auth()
  return (
    <>
      <div className="col-lg-9 col-md-8 main-content">
        <Profile />

        <div className="custom-container mb-5 d-flex align-items-center justify-content-between">
          <div className="text-content">
            <h1 style={{ fontSize: "bold", fontWeight: 50 }}>
              Good Morning {session?.user?.name}!
            </h1>
            <p>
              Have a nice day at work. It seems like <br /> youre referring to
              {session?.user?.name}
            </p>
          </div>
          <Image
            src="/aset/bro.svg"
            alt="Image"
            className="img-fluid"
            width="0"
            height="0"
          />
        </div>

        <div className="table-container">
          {/* <RowData
            headers={[
              "no plat",
              "Jenis Kendaraan",
              "Paket Pencucian",
              "Status",
            ]}
            data={[["no plat", "Jenis Kendaraan", "Paket Pencucian", "Status"]]}
            withButton={false}
          /> */}
        </div>
      </div>
    </>
  )
}
