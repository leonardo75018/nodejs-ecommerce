import { OrderProduct } from '@prisma/client'
import { CartProduct } from '../entities'
import {
  CreateCartProductRequest,
  UpdateCartProductRequest
} from '../interfaces'

export interface CreateOrderProductsRepository {
  createOrderProduct(params: CreateCartProductRequest): Promise<OrderProduct>
  findAllOrderProducts(cartId: number): Promise<OrderProduct[] | null>
}
