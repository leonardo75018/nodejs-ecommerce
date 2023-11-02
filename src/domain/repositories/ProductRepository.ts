import { Product } from '../entities'

export interface ProductRepository {
  createProduct(): Promise<Product>
  updateProduct(): Promise<Product>
  findProductById(productId: string): Promise<Product>
  deleteProduct(productId: string): Promise<Product>
}
