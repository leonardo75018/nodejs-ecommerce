import { PrismaUsersRepository } from '../../../repositories'

export class PrismaDeleteUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(userId: string): Promise<void> {
    await this.prismaUsersRepository.deleteUser(userId)
  }
}
