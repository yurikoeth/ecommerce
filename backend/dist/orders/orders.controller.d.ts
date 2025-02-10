import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            createdAt: Date;
            updatedAt: Date;
        };
        products: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
            };
        } & {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
    })[]>;
    getOrderById(id: string): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            createdAt: Date;
            updatedAt: Date;
        };
        products: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string;
                price: number;
                stock: number;
            };
        } & {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
    }) | null>;
    createOrder(data: {
        userId: number;
        products: {
            productId: number;
            quantity: number;
        }[];
    }): Promise<{
        products: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    updateOrder(id: string, data: {
        products?: {
            productId: number;
            quantity: number;
        }[];
    }): Promise<{
        products: {
            id: number;
            quantity: number;
            productId: number;
            orderId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    deleteOrder(id: string): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
    }>;
}
