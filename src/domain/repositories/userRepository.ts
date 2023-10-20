import { User } from '../entities/User'
import { createUserRequest } from '../types'
import { UpdateUserParams } from '../types/UpdateUserParams'

export interface UsersRepository {
  createUser(params: createUserRequest): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: string): Promise<void>
  findUserById(userId: string): Promise<User | null>
  findUserByEmail(userEmail: string): Promise<User | null>
  findAllUsers(): Promise<User[] | null>
}

export default UsersRepository
