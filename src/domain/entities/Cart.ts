import { User } from './User'
import { CartProductItem, Order } from './index'

export interface Cart {
  id: number
  total: number
  cartProductItems?: CartProductItem[]
}
