"use server"

export async function customerAction(
  state: string | undefined,
  formData: FormData
) {
  console.log(formData.get("form-id"))
  return "successfully executed"
}
