import { PrismaUsersRepository } from '../../../repositories'

export class PrismaDeleteUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(userId: string): Promise<void> {
    const userExist = await this.prismaUsersRepository.findUserById(userId)

    if (!userExist) {
      throw new Error(`User ${userId} is not found `)
    }

    await this.prismaUsersRepository.deleteUser(userId)
  }
}
