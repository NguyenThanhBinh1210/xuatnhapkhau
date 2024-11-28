import { ResponseApi } from './utils.type'

export interface Profile {
  name: string
  username: string
  email: string
}

export type AuthResponse = ResponseApi<{
  name?: string
  email?: string
  password?: string
  isAdmin?: boolean
  role?: string
  _id?: string
  createdAt?: string
  updatedAt?: string
}>
