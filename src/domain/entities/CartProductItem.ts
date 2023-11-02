import { Product } from './Product'

export interface CartProductItem {
  id: number
  price: number
  quantity: number
  cartId: number
  product: Product
}
