import { CartProduct, CreateCartProductRequest } from '../../../../domain'
import { PrismaCartProductRepository } from '../../../repositories'

export class PrismaCreateCartProductService {
  constructor(
    private prismacartProductRepository: PrismaCartProductRepository
  ) {}
  async execute(params: CreateCartProductRequest): Promise<CartProduct> {
    const { cartId, price, productId, quantity } = params
    const cartProuduct =
      await this.prismacartProductRepository.createCartProduct({
        cartId,
        price,
        productId,
        quantity
      })

    return cartProuduct
  }
}
