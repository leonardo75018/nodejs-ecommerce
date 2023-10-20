import { User } from '../../../../domain/entities'
import { createUserRequest } from '../../../../domain/types'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaCreateUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(params: createUserRequest) {
    const userExist = await this.prismaUsersRepository.findUserByEmail(
      params.email
    )

    if (userExist) {
      throw new Error('There is already one user with  this email ')
    }

    const user = await this.prismaUsersRepository.createUser(params)
    return user
  }
}
