import { Request, Response } from 'express'
import prisma from '../outils/prisma'

export class CartsControllers {
  async createCart(req: Request, response: Response) {
    const { userId } = req.params

    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    const cart = await prisma.cart.create({
      data: {
        user: {
          connect: {
            id: user.id
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

    const cartTransformed = {
      cart: {
        id: userCart.id,
        total: userCart.CartProduct.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ).toFixed(2),
        product: userCart.CartProduct
      }
    }
    ;('')
    response.send(cartTransformed)
  }
}
