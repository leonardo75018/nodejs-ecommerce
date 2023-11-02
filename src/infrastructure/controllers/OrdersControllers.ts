import { Request, Response } from 'express'
import prisma from '../outils/prisma'

export class OrdersControllers {
  async getOrders(req: Request, response: Response) {
    const orders = await prisma.order.findMany()
    response.status(200).send(orders)
  }
  async createOrder(req: Request, response: Response) {
    const { userId } = req.params

    const userCart = await prisma.cart.findUnique({
      where: {
        userId: Number(userId)
      },
      include: {
        CartProduct: {
          include: {
            product: true
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

    await prisma.order.create({
      data: {
        cartId: cartTransformed.cart.id,
        orderProducts: {
          createMany: {
            data: cartTransformed.cart.product.map(item => ({
              productId: Number(item.product.id),
              price: item.price,
              quantity: item.quantity
            }))
          }
        },
        total: Number(cartTransformed.cart.total),
        userId: Number(userId)
      }
    })
    await prisma.cartProduct.deleteMany({
      where: {
        cartId: cartTransformed.cart.id
      }
    })

    const orders = await prisma.order.findMany({
      include: {
        orderProducts: {
          include: { product: true }
        }
      }
    })
    response.status(200).send(orders)
  }
}
