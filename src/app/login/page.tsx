"use client"
import { authenticate } from "@/features/auth/actions/authenticate"
import { useSearchParams } from "next/navigation"
import React, { Suspense, useActionState } from "react"

function InputCallbackUrl() {
  const query = useSearchParams()
  return (
    <input
      type="hidden"
      name="cbUrl"
      value={query.get("callbackUrl") || undefined}
    />
  )
}

export default function Page() {
  const [message, action, isPending] = useActionState(authenticate, undefined)
  return (
    <main>
      <img src="/aset/3titik.svg" alt="3titik" className="tiga-titik" />
      <img src="/aset/CarWash.svg" alt="carwash" className="carwash" />
      <div className="container">
        <div className="logo-container">
          <img src="/aset/Car.svg" alt="Car Icon" className="car-icon" />
          <img src="/aset/CarWash.svg" alt="CarWash Logo" className="logo" />
        </div>
        <h1 className="login-title">Login</h1>
        <form action={action}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            {message && (
              <p className="text-red-600">Email atau Password salah</p>
            )}
          </div>
          <div className="forgot-password">
            <a href="#">Lupa Sandi?</a>
          </div>
          <button type="submit" className="btn login-button w-100 text-white">
            LOGIN
          </button>
        </form>
      </div>
    </main>
  )
}
