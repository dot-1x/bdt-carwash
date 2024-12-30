import { auth } from "@/features/auth/auth"

export default async function Profile() {
  const session = await auth()
  return (
    <div className="profile-section">
      <form
        className="d-flex align-items-center"
        style={{ width: "70%", position: "relative" }}
      >
        <input
          className="form-control ps-5"
          type="search"
          aria-label="Search"
        />
        <span className="search-icon">
          <img
            src="/aset/search.svg"
            alt="Search Icon"
            width="20"
            height="20"
          />
        </span>
      </form>

      <div className="profile-info d-flex align-items-center">
        <img
          src="/aset/Profile user.svg"
          alt="Profile"
          className="rounded-circle me-3"
          width="50"
        />
        <div>
          <h5 className="mb-0">{session?.user?.name}</h5>
          <p className="mb-0">{session?.user?.role}</p>
        </div>
      </div>
    </div>
  )
}
