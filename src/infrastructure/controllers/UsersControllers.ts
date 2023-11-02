import { Request, Response } from 'express'
import {
  PrismaCreateUserService,
  PrismaDeleteUserService,
  PrismaFindAllUsersService,
  PrismaFindUserByIdService,
  PrismaUpdateUserService,
  AuthentificateUserService
} from '../services/index'
import { PrismaUsersRepository } from '../repositories'

export class UsersControllers {
  async createUser(request: Request, response: Response) {
    const { firstName, lastName, email, password, isAdmin } = request.body

    const prismaUsersRepository = new PrismaUsersRepository()
    const prismaCreateUserService = new PrismaCreateUserService(
      prismaUsersRepository
    )
    const user = await prismaCreateUserService.execute({
      firstName,
      lastName,
      email,
      password,
      isAdmin
    })

    response.status(201).send(user)
  }

  async getAllUsers(request: Request, response: Response) {
    const prismaUsersRepository = new PrismaUsersRepository()
    const prismaFindAllUsersService = new PrismaFindAllUsersService(
      prismaUsersRepository
    )
    const users = await prismaFindAllUsersService.execute()

    response.status(201).send(users)
  }
  async findUserById(request: Request, response: Response) {
    const { userId } = request.params
    const prismaUsersRepository = new PrismaUsersRepository()
    const prismaFindUserByIdService = new PrismaFindUserByIdService(
      prismaUsersRepository
    )
    const user = await prismaFindUserByIdService.execute(userId)

    response.status(201).send(user)
  }
  async deleteUserById(request: Request, response: Response) {
    const { userId } = request.params
    const prismaUsersRepository = new PrismaUsersRepository()
    const prismaDeleteUserService = new PrismaDeleteUserService(
      prismaUsersRepository
    )

    await prismaDeleteUserService.execute(userId)
    response.status(201).send(`user ${userId} is deleted`)
  }

  async updateUser(request: Request, response: Response) {
    const { firstName, lastName, password } = request.body
    const { userId } = request.params

    const prismaUsersRepository = new PrismaUsersRepository()
    const prismaUpdateUserService = new PrismaUpdateUserService(
      prismaUsersRepository
    )

    const userUpdated = await prismaUpdateUserService.execute({
      firstName,
      lastName,
      password,
      userId
    })
    response.status(201).send(userUpdated)
  }

  async authentification(request: Request, response: Response) {
    const { email, password } = request.body
    const prismaUsersRepository = new PrismaUsersRepository()
    const authentificateUserService = new AuthentificateUserService(
      prismaUsersRepository
    )

    const token = await authentificateUserService.execute({ email, password })
    response.status(201).send(token)
  }
}
