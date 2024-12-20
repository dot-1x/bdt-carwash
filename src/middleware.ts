export { auth as middleware } from "@/features/auth/auth"

export const config = {
  matcher: ["/dashboard", "/dashboard/:path"],
}
