import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { PrismaUsersRepository } from '../../../repositories'

interface AuthentificateRequest {
  email: string
  password: string
}

export class AuthentificateUserService {
  constructor(private prismaUsersRepository: PrismaUsersRepository) {}
  async execute({ email, password }: AuthentificateRequest) {
    const user = await this.prismaUsersRepository.findUserByEmail(email)
    if (!user) {
      throw new Error('Email, Password incorrect')
    }

    const comparePassWord = await compare(password, user.password)
    if (!comparePassWord) {
      throw new Error('Email,Password incorrect')
    }
    const token = sign({ userId: user.id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: '1d',
      subject: String(user.id)
    })
    return token
  }
}
