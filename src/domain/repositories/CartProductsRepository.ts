import { CartProduct } from '../entities'
import {
  CreateCartProductRequest,
  UpdateCartProductRequest
} from '../interfaces'

export interface CartProductsRepository {
  createCartProduct(params: CreateCartProductRequest): Promise<CartProduct>
  updateCartProduct(request: UpdateCartProductRequest): Promise<CartProduct>
  findAllCartProducts(cartId: number): Promise<CartProduct[] | null>
}
