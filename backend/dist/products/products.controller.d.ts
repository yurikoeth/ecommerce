import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }[]>;
    getProductById(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    } | null>;
    createProduct(data: {
        name: string;
        description: string;
        price: number;
        stock: number;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }>;
    updateProduct(id: string, data: {
        name?: string;
        description?: string;
        price?: number;
        stock?: number;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }>;
    deleteProduct(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }>;
}
