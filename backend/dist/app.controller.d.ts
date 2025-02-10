import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
