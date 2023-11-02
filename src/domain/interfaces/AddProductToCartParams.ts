import { Product } from '@prisma/client'

export interface AddProductToCartRequest {
  productId: number
  price: number
  quantity: number
  cartId: number
}
