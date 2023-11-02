import { Cart } from '../../domain/entities'
import { DeleteCartByUserParams } from '../../domain/interfaces'
import { CartRepository } from '../../domain/repositories'
import prisma from '../outils/prisma'

export class PrismaCartRepository implements CartRepository {
  async createCart(userId: string): Promise<Cart> {
    const cart = await prisma.cart.create({
      data: {
        userId: Number(userId)
      },
      include: {
        cartProducts: true
      }
    })

    return cart
  }

  async findAll(): Promise<Cart[] | null> {
    const carts = await prisma.cart.findMany({
      include: {
        cartProducts: true
      }
    })
    return carts
  }

  async findById(cartId: string): Promise<Cart> {
    const cart = await prisma.cart.findUnique({
      where: {
        id: Number(cartId)
      },
      include: {
        cartProducts: true
      }
    })
    return cart
  }

  async deleteById(cartId: string): Promise<void> {
    await prisma.cart.delete({
      where: {
        id: Number(cartId)
      }
    })
  }
  async deleteByUser(params: DeleteCartByUserParams): Promise<void> {
    await prisma.cart.delete({
      where: {
        id: Number(params.cartId),
        userId: Number(params.userId)
      }
    })
  }
}
