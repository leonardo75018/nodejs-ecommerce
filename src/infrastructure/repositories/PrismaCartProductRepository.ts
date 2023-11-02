import { Cart, CartProduct } from '../../domain/entities'
import {
  CreateCartProductRequest,
  UpdateCartProductRequest
} from '../../domain/interfaces'
import { CartProductsRepository } from '../../domain/repositories'
import prisma from '../outils/prisma'

export class PrismaCartProductRepository implements CartProductsRepository {
  async createCartProduct(
    params: CreateCartProductRequest
  ): Promise<CartProduct> {
    const { cartId, price, productId, quantity } = params
    const cartProduct = await prisma.cartProduct.create({
      data: {
        cartId,
        price,
        productId,
        quantity
      }
    })
    return cartProduct
  }
  async findAllCartProducts(cartId: number): Promise<CartProduct[]> {
    const cartProducts = await prisma.cartProduct.findMany()
    return cartProducts
  }
  async updateCartProduct(
    request: UpdateCartProductRequest
  ): Promise<CartProduct> {
    const { price, quantity, cartProductId } = request
    const cartProductUpdated = await prisma.cartProduct.update({
      where: {
        id: Number(cartProductId)
      },
      data: {
        price,
        quantity
      }
    })
    return cartProductUpdated
  }
}
