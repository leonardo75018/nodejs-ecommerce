import { User } from '../entities/User'
import { CreateUserRequest } from '../interfaces'
import { UpdateUserParams } from '../interfaces/UpdateUserParams'

export interface UsersRepository {
  createUser(params: CreateUserRequest): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: string): Promise<void>
  findUserById(userId: string): Promise<User | null>
  findUserByEmail(userEmail: string): Promise<User | null>
  findAllUsers(): Promise<User[] | null>
}

export default UsersRepository
