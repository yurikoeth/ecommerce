export declare class AuthService {
    private prisma;
    createUser(data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUserByEmail(email: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    signin(email: string, password: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllUsers(): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
