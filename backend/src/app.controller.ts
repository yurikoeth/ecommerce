import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
async getUsers(): Promise<{ 
  id: number; 
  email: string; 
  password: string; 
  firstName: string;
  lastName: string; 
  createdAt: Date; 
  updatedAt: Date 
}[]> {
  return await this.appService.getUsers(); // Await the Promise to resolve to user data
}

}
