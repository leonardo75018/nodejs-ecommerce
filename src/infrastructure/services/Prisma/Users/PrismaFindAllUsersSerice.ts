import { User } from '../../../../domain/entities'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaFindAllUsersService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(): Promise<User[] | null> {
    const users = await this.prismaUsersRepository.findAllUsers()
    return users
  }
}
