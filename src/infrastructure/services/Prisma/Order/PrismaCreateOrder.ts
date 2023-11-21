import { CreateOrderDTO } from '../../../controllers/dto/createOrder.dto'
import { PrismaOrdersRepository } from '../../../repositories'

export class PrismaCreateOrder {
  constructor(private prismaOrdersRepository: PrismaOrdersRepository) {}

  async execute(params: CreateOrderDTO) {
    const cart = await this.prismaOrdersRepository.createOrder(params)
  }
}
