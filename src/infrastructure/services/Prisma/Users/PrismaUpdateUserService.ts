import { User } from '../../../../domain/entities'
import { UpdateUserParams } from '../../../../domain/types/UpdateUserParams'
import { PrismaUsersRepository } from '../../../repositories'

export class PrismaUpdateUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}

  async execute(params: UpdateUserParams): Promise<User> {
    const { firstName, lastName, password, userId } = params
    const userUpdated = await this.prismaUsersRepository.updateUser({
      firstName,
      lastName,
      password,
      userId
    })
    return userUpdated
  }
}
