export declare class ProductsService {
    getAllProducts(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }[]>;
    getProductById(id: number): Promise<{
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
    updateProduct(id: number, data: {
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
    deleteProduct(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        price: number;
        stock: number;
    }>;
}
