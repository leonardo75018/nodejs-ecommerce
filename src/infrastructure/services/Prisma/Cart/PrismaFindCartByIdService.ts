import { PrismaCartRepository } from '../../../repositories'
import { Cart } from '../../../../domain'

export class PrimaFindCartByIdService {
  constructor(private prismaCartRepository: PrismaCartRepository) {}

  async execute(cartId: string): Promise<Cart> {
    const cart = await this.prismaCartRepository.findById(cartId)
    return cart
  }
}
