export declare class AppService {
    private prisma;
    getUsers(): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
