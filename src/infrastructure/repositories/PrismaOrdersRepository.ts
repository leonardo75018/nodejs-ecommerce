import { Order } from '../../domain/entities'
import {
  CreateOrderRequest,
  FindOrderByUserParams
} from '../../domain/interfaces'
import { OrdersRepository } from '../../domain/repositories'
import prisma from '../outils/prisma'

export class PrismaOrdersRepository implements OrdersRepository {
  async createOrder(params: CreateOrderRequest): Promise<Order> {
    const { cartId, orderProducts, total, userId } = params
    const order = await prisma.order.create({
      data: {
        cartId: cartId,
        orderProducts: {
          createMany: {
            data: orderProducts.map(item => ({
              productId: item.price,
              price: item.price,
              quantity: item.quantity
            }))
          }
        },
        total: Number(
          orderProducts
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)
        ),
        userId: Number(userId)
      },
      include: {
        orderProducts: true
      }
    })
    return order
  }

  async findOrderById(orderId: string): Promise<Order> {
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
      include: {
        orderProducts: true
      }
    })
    return order
  }
  async findOrderByUser(params: FindOrderByUserParams): Promise<Order> {
    const { orderId, userId } = params
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId), userId: Number(userId) },
      include: {
        orderProducts: true
      }
    })
    return order
  }
  async findOrders(): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      include: {
        orderProducts: true
      }
    })
    return orders
  }
  findOrdersByUser(userId: string): Promise<Order[]> {
    const userOrders = prisma.order.findMany({
      where: {
        userId: Number(userId)
      },
      include: {
        orderProducts: true
      }
    })
    return userOrders
  }
}
