import { signOut } from "@/features/auth/auth"

export default function Page() {
  return (
    <>
      <div className="col-lg-9 col-md-8 main-content">
        <div
          className="profile-section"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "10px",
            width: "100%",
          }}
        >
          <div className="profile-section d-flex justify-content-end align-items-center">
            <div className="profile-info d-flex align-items-center">
              <img
                src="/aset/Profile user.svg"
                alt="Profile"
                className="rounded-circle me-3"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h5 className="mb-0">Su'ud</h5>
                <p className="mb-0">Admin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-container mb-5 d-flex align-items-center justify-content-between">
          <div className="text-content">
            <h1 style={{ fontSize: "bold", fontWeight: 50 }}>
              Good Morning Su'ud!
            </h1>
            <p>
              Have a nice day at work. It seems like <br /> you're referring to
              Su'ud
            </p>
          </div>
          <img src="/aset/bro.svg" alt="Image" className="img-fluid" />
        </div>

        <div className="table-container">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>No.Plat</th>
                <th>Jenis Kendaraan</th>
                <th>Paket Pencucian</th>
                <th>Pembayaran</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>L 1996 V</td>
                <td>Roda Empat</td>
                <td>Paket</td>
                <td>Lunas</td>
                <td>Selesai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export function PageOld() {
  return (
    <>
      <h1>Selamat Datang</h1>
      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/login" })
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  )
}
