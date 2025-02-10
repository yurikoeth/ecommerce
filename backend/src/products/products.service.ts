import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  // Retrieve all products
  async getAllProducts() {
    return await prisma.product.findMany();
  }

  // Retrieve a product by ID
  async getProductById(id: number) {
    return await prisma.product.findUnique({
      where: { id },
    });
  }

  // Create a new product
  async createProduct(data: { name: string; description: string; price: number; stock: number }) {
    try {
      return await prisma.product.create({
        data,
      });
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }
  }

  // Update a product by ID
  async updateProduct(id: number, data: { name?: string; description?: string; price?: number; stock?: number }) {
    return await prisma.product.update({
      where: { id },
      data,
    });
  }

  // Delete a product by ID
  async deleteProduct(id: number) {
    return await prisma.product.delete({
      where: { id },
    });
  }
}
