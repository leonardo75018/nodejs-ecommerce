import { User } from '../entities'
import { createUserRequest } from '../types'
import { UpdateUserParams } from '../types/UpdateUserParams'

export interface UsersServices {
  createUser(params: createUserRequest): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: number): Promise<void>
  findUserById(userId: number): Promise<User | null>
  findUserByEmail(userEmail: string): Promise<User | null>
  findAllUsers(): Promise<User[] | null>
}
