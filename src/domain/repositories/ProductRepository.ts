import { Product } from '../entities'
import { CreateProductRequest, UpdateProductRequest } from '../interfaces'

export interface ProductRepository {
  createProduct(params: CreateProductRequest): Promise<Product>
  updateProduct(params: UpdateProductRequest): Promise<Product>
  findProductById(productId: string): Promise<Product | null>
  deleteProduct(productId: string): Promise<void>
  findAllProducts(): Promise<Product[] | null>
}
