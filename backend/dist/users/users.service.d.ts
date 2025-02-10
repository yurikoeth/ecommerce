export declare class UsersService {
    getAllUsers(): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: number, data: {
        name?: string;
        email?: string;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
