import Image from "next/image"
import "./style.css"
import { auth } from "@/features/auth/auth"
export default async function Page() {
  const session = await auth()
  return (
    <div className="col-lg-9 col-md-8 main-content">
      {/* <div className="profile-section">
        <h3 className="h3 custom-title"></h3>
        <div className="profile-info d-flex align-items-center">
          <Image
            src="aset/Profile user.svg"
            alt="Profile"
            className="rounded-circle me-3"
            width="50"
            height={50}
          />
          <div>
            <h5 className="mb-0">{session?.user?.name}</h5>
            <p className="mb-0">{session?.user?.role}</p>
          </div>
        </div>
      </div> */}
      <h2>Profil Diri</h2>
      <div className="container">
        <div className="profile-diri">
          <Image
            src="/aset/Profile user.svg"
            alt="Profile"
            className="rounded-circle me-3"
            width="50"
            height={50}
          />
          <table>
            <tbody>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <th>{session?.user?.name}</th>
              </tr>
              <tr>
                <td>Username</td>
                <td>:</td>
                <th>{session?.user?.username}</th>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <th>{session?.user?.role}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
