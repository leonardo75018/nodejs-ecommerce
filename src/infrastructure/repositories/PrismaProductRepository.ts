import { Product } from '../../domain/entities'
import {
  CreateProductRequest,
  UpdateProductRequest
} from '../../domain/interfaces'
import { ProductRepository } from '../../domain/repositories'
import prisma from '../outils/prisma'

export class PrismaProductRepository implements ProductRepository {
  async createProduct(params: CreateProductRequest): Promise<Product> {
    const { description, name, price } = params

    const product = await prisma.product.create({
      data: {
        description,
        name,
        price
      }
    })
    return product
  }
  async updateProduct(params: UpdateProductRequest): Promise<Product> {
    const { description, name, price, productId } = params
    const productUpdated = await prisma.product.update({
      where: {
        id: productId
      },
      data: {
        description,
        name,
        price
      }
    })
    return productUpdated
  }
  async findProductById(productId: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) }
    })
    return product
  }
  async deleteProduct(productId: string): Promise<void> {
    await prisma.product.delete({
      where: {
        id: Number(productId)
      }
    })
  }
  async findAllProducts(): Promise<Product[] | null> {
    const products = await prisma.product.findMany()
    return products
  }
}
