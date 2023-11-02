import { OrderProduct } from './index'

export interface Order {
  id: number
  total: number
  orderProducts: OrderProduct[]
  userId: number
  cartId: number
  createdAt: Date
}
