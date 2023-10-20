import { User } from '../entities/User'
import { createUserParams } from '../types'
import { UpdateUserParams } from '../types/UpdateUserParams'

export interface UsersRepository {
  createUser(params: createUserParams): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: string): Promise<void>
  findUserById(userId: string): Promise<User | null>
  findAllUsers(): Promise<User[] | null>
}

export default UsersRepository
