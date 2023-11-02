import { User } from '../../domain/entities'
import { UsersRepository } from '../../domain/repositories'
import { CreateUserRequest } from '../../domain/interfaces'
import { UpdateUserParams } from '../../domain/interfaces/UpdateUserParams'
import prisma from '../outils/prisma'

export class PrismaUsersRepository implements UsersRepository {
  async createUser(params: CreateUserRequest): Promise<User> {
    const user = await prisma.user.create({ data: params })
    return user
  }
  async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: Number(userId)
      }
    })
  }
  async findAllUsers(): Promise<User[] | null> {
    const users = await prisma.user.findMany()
    return users
  }
  async findUserById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })
    return user
  }
  async updateUser(params: UpdateUserParams): Promise<User> {
    const { firstName, lastName, password } = params
    const userUpdated = await prisma.user.update({
      where: {
        id: Number(params.userId)
      },
      data: {
        firstName,
        lastName,
        password
      }
    })
    return userUpdated
  }
  async findUserByEmail(userEmail: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail
      }
    })
    return user
  }
}
