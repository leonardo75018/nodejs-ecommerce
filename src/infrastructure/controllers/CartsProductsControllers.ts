import { Request, Response } from 'express'
import prisma from '../outils/prisma'

export class CartProductControllers {
  async createCartProducts(req: Request, response: Response) {
    const { userId } = req.params
    const { productId, price, quantity } = req.body

    const userCart = await prisma.cart.findUnique({
      where: {
        userId: Number(userId)
      }
    })

    if (!userCart) {
      throw new Error('Cart not found')
    }

    const productCart = await prisma.cartProduct.create({
      data: {
        productId,
        price,
        quantity,
        cartId: userCart.id
      }
    })

    const cart = await prisma.cart.findUnique({
      where: {
        userId: Number(userId)
      },
      include: {
        CartProduct: {
          include: {
            product: {}
          }
        }
      }
    })
    response.send(cart)
  }

  async getCartByUserId(req: Request, response: Response) {
    const { userId } = req.params

    const userCart = await prisma.cart.findUnique({
      where: {
        userId: Number(userId)
      },
      include: {
        CartProduct: {
          include: {
            product: {}
          }
        }
      }
    })
    response.send(userCart)
  }
}
