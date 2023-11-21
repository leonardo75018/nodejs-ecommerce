import { PrismaCartRepository } from '../../../repositories'
import { Cart } from '../../../../domain'

export class PrimaCreateCartService {
  constructor(private prismaCartRepository: PrismaCartRepository) {}

  async execute(userId: string): Promise<Cart> {
    const cartExist = await this.prismaCartRepository.findByUserId(userId)
    if (cartExist) {
      //Todo : Create Cart and add product to cart
      throw new Error('User already one cart')
    }
    const cart = await this.prismaCartRepository.createCart(userId)
    return cart
  }
}
