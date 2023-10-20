import { User } from '../entities'
import { createUserParams } from '../types'
import { UpdateUserParams } from '../types/UpdateUserParams'

export interface UsersServices {
  createUser(params: createUserParams): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: number): Promise<void>
  findUserById(userId: number): Promise<User | null>
  findAllUsers(): Promise<User[] | null>
}
