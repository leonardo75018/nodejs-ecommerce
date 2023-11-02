import { User } from '../../../../domain/entities'
import { CreateUserRequest } from '../../../../domain/interfaces'
import { PrismaUsersRepository } from '../../../repositories'
import { hash } from 'bcrypt'

export class PrismaCreateUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(params: CreateUserRequest): Promise<User> {
    const { firstName, lastName, email, password, isAdmin } = params

    const userExist = await this.prismaUsersRepository.findUserByEmail(email)

    if (userExist) {
      throw new Error('There is already one user with  this email ')
    }

    const passwordHash = await hash(password, 8)

    const user = await this.prismaUsersRepository.createUser({
      firstName,
      lastName,
      email,
      password: passwordHash,
      isAdmin
    })
    return user
  }
}
