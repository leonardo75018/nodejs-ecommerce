import { User } from '../../../../domain/entities'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaFindUserByIdService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(userId: string): Promise<User | null> {
    console.log(userId)
    const user = await this.prismaUsersRepository.findUserById(userId)
    console.log(user)
    return user
  }
}
