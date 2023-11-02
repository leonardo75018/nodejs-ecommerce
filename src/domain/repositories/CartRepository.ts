import { Cart } from '../entities'
import { User } from '../entities/User'
import { createUserRequest, deleteCartByUserParams } from '../types'
import { UpdateUserParams } from '../types/UpdateUserParams'

export interface CartRepository {
  createCarte(userId: string): Promise<Cart>
  deleteById(cartId: string): Promise<void>
  deleteByUser(params: deleteCartByUserParams): Promise<void>
  findById(cartId: string): Promise<Cart | null>
  findAll(): Promise<Cart[] | null>
}

export default CartRepository
