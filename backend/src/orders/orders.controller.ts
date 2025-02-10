import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(Number(id));
  }

  @Post()
  async createOrder(@Body() data: { userId: number; products: { productId: number; quantity: number }[] }) {
    return this.ordersService.createOrder(data);
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() data: { products?: { productId: number; quantity: number }[] },
  ) {
    return this.ordersService.updateOrder(Number(id), data);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(Number(id));
  }
}
