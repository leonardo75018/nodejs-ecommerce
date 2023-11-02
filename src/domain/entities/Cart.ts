import { CartProduct } from './CartProduct'

export interface Cart {
  id: number
  total: number
  userId: number
  cartProducts?: CartProduct[]
}
