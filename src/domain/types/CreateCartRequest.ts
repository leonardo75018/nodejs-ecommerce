import { CartProduct } from '@prisma/client'

export interface createUserRequest {
  total: number
  userId: string
  cartProduct: CartProduct[]
}
