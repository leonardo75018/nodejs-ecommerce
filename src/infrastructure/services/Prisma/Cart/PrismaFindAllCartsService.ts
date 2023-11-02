import { PrismaCartRepository } from '../../../repositories'
import { Cart } from '../../../../domain'

export class PrismaFindAllCartsService {
  constructor(private prismaCartRepository: PrismaCartRepository) {}

  async execute(): Promise<Cart[]> {
    const carts = await this.prismaCartRepository.findAll()
    return carts
  }
}
