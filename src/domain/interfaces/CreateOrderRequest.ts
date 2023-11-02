import { OrderProduct } from '../entities'

export interface CreateOrderRequest {
  cartId: number
  orderProducts: OrderProduct[]
  total: number
  userId: Number
}
