import { Product } from './Product'

export interface CartProduct {
  id: number
  cartId: number
  price: number
  quantity: number
  productId: number
}
