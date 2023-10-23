import { User } from '../../../../domain/entities'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaFindUserByIdService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(userId: string): Promise<User | null> {
    const user = await this.prismaUsersRepository.findUserById(userId)
    return user
  }
}
