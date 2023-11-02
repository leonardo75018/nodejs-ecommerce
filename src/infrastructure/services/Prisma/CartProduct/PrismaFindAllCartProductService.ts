import { CartProduct } from '../../../../domain'
import { PrismaCartProductRepository } from '../../../repositories'

export class PrismaFindAllCartService {
  constructor(
    private prismacartProductRepository: PrismaCartProductRepository
  ) {}
  async execute(cartId: string): Promise<CartProduct[]> {
    const cartProducts =
      await this.prismacartProductRepository.findAllCartProducts(cartId)
    return cartProducts
  }
}
