"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let OrdersService = class OrdersService {
    async getAllOrders() {
        return await prisma.order.findMany({
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
    async getOrderById(id) {
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
    async createOrder(data) {
        return await prisma.order.create({
            data: {
                user: { connect: { id: data.userId } },
                products: {
                    create: data.products.map((item) => ({
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
    async updateOrder(id, data) {
        await prisma.orderProduct.deleteMany({
            where: { orderId: id },
        });
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
    async deleteOrder(id) {
        return await prisma.order.delete({
            where: { id },
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
//# sourceMappingURL=orders.service.js.map