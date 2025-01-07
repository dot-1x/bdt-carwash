"use client"
import { authenticate } from "@/features/auth/actions/authenticate"
import React, { useActionState } from "react"
import Image from "next/image"

export default function Page() {
  const [message, action, isPending] = useActionState(authenticate, undefined)
  return (
    <main>
      <Image
        src="/aset/3titik.svg"
        alt="3titik"
        className="tiga-titik"
        width="0"
        height="0"
      />
      <Image
        src="/aset/CarWash.svg"
        alt="carwash"
        className="carwash"
        width={250}
        height={250}
      />
      <div className="container">
        <div className="logo-container">
          <Image
            src="/aset/Car.svg"
            alt="Car Icon"
            className="car-icon"
            width="0"
            height="0"
          />
          <Image
            src="/aset/CarWash.svg"
            alt="CarWash Logo"
            className="logo"
            width="0"
            height="0"
          />
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
