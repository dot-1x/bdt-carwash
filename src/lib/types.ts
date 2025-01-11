export enum ROLE {
  ADMIN = "Admin",
  SUPERADMIN = "SuperAdmin",
}

export interface data {
  data_id: number
  data: (string | number)[]
}

export interface formState {
  status: boolean
  message: string
}
