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
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-8">
          <i className="fas fa-car text-4xl text-blue-500"></i>
          <span className="text-4xl font-bold ml-2">
            <span className="text-black">Car</span>
            <span className="text-blue-500">Wash</span>
          </span>
        </div>
        <div className="bg-teal-700 p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Login
          </h2>
          <form action={action}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-gray-300 text-black"
                placeholder="yourmail@gmail.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 rounded bg-gray-300 text-black"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-gray-300 text-sm">
                Lupa Sandi?
              </a>
            </div>
            <Suspense>
              <InputCallbackUrl />
            </Suspense>
            <div className="flex justify-between items-center mb-6">
              {message && (
                <p className="text-red-600">Email atau Password salah</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-teal-400 text-white p-2 rounded text-lg font-bold"
              aria-disabled={isPending}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
