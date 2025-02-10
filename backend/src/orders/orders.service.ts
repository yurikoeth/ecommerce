import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  // Retrieve all orders
  async getAllOrders() {
    return await prisma.order.findMany({
      include: {
        user: true,            // Include user details
        products: {
          include: {
            product: true,     // Include product details within the order
          },
        },
      },
    });
  }

  // Retrieve an order by ID
  async getOrderById(id: number) {
    return await prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        products: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  // Create a new order
  async createOrder(data: { userId: number; products: { productId: number; quantity: number }[] }) {
    // Create an order with associated products
    return await prisma.order.create({
      data: {
        user: { connect: { id: data.userId } }, // Link order to a user
        products: {
          create: data.products.map((item) => ({
            product: { connect: { id: item.productId } }, // Link each product in the order
            quantity: item.quantity,
          })),
        },
      },
      include: {
        products: true,
      },
    });
  }

  // Update an order by ID (e.g., updating product quantities)
  async updateOrder(id: number, data: { products?: { productId: number; quantity: number }[] }) {
    // First, remove existing products from the order, then re-add them if provided
    await prisma.orderProduct.deleteMany({
      where: { orderId: id },
    });

    // Re-add updated product list, if provided
    return await prisma.order.update({
      where: { id },
      data: {
        products: {
          create: data.products?.map((item) => ({
            product: { connect: { id: item.productId } },
            quantity: item.quantity,
          })),
        },
      },
      include: {
        products: true,
      },
    });
  }

  // Delete an order by ID
  async deleteOrder(id: number) {
    return await prisma.order.delete({
      where: { id },
    });
  }
}
