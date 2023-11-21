import { OrderProduct } from '../../../domain'

export class CreateOrderDTO {
  cartId: number
  orderProducts: OrderProduct[]
  total: number
  userId: Number
}
