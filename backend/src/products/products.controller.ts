import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }

  @Post()
  async createProduct(@Body() data: { name: string; description: string; price: number; stock: number }) {
    return this.productsService.createProduct(data);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: { name?: string; description?: string; price?: number; stock?: number },
  ) {
    return this.productsService.updateProduct(Number(id), data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id));
  }
}
