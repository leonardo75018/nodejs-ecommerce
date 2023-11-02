import { PrismaCartRepository } from '../../../repositories'
import { Cart } from '../../../../domain'

export class PrimaFindCartByUserIdService {
  constructor(private prismaCartRepository: PrismaCartRepository) {}

  async execute(userId: string): Promise<Cart> {
    const cart = await this.prismaCartRepository.findByUserId(userId)
    return cart
  }
}
