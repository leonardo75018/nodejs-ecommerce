import { Cart } from '../entities'
import { DeleteCartByUserParams, AddProductToCartRequest } from '../interfaces'

export interface CartRepository {
  createCart(userId: string): Promise<Cart>
  deleteById(cartId: string): Promise<void>
  deleteByUser(params: DeleteCartByUserParams): Promise<void>
  findById(cartId: string): Promise<Cart | null>
  findAll(): Promise<Cart[] | null>
}

export default CartRepository
