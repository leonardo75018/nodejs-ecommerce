import { User } from '../../../../domain/entities'
import { createUserParams } from '../../../../domain/types'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaCreateUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(params: createUserParams): Promise<User> {
    const user = await this.prismaUsersRepository.createUser(params)
    return user
  }
}
