import { User } from '../../../../domain/entities'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaFindUserByEmailService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(userEmail: string): Promise<User | null> {
    const user = await this.prismaUsersRepository.findUserByEmail(userEmail)
    return user
  }
}
