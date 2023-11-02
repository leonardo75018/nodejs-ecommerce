import { CartProduct } from '../entities'

export interface CreateCartRequest {
  total: number
  userId: string
  cartProduct: CartProduct[]
}
