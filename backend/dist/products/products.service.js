"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ProductsService = class ProductsService {
    async getAllProducts() {
        return await prisma.product.findMany();
    }
    async getProductById(id) {
        return await prisma.product.findUnique({
            where: { id },
        });
    }
    async createProduct(data) {
        try {
            return await prisma.product.create({
                data,
            });
        }
        catch (error) {
            console.error('Error creating product:', error);
            throw new Error('Failed to create product');
        }
    }
    async updateProduct(id, data) {
        return await prisma.product.update({
            where: { id },
            data,
        });
    }
    async deleteProduct(id) {
        return await prisma.product.delete({
            where: { id },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map