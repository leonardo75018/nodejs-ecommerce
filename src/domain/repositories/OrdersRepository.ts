import { Order } from '../entities'
import { CreateOrderRequest, FindOrderByUserParams } from '../interfaces'

export interface OrdersRepository {
  createOrder(request: CreateOrderRequest): Promise<Order>
  findOrders(): Promise<Order[] | null>
  findOrderById(orderId: string): Promise<Order | null>
  findOrdersByUser(userId: string): Promise<Order[] | null>
  findOrderByUser(params: FindOrderByUserParams): Promise<Order | null>
}
