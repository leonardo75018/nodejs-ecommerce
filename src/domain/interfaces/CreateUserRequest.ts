export interface CreateUserRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin?: boolean
}
