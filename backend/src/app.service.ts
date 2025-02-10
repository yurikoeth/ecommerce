import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();

  // Updated method to retrieve users with specific fields
  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        createdAt: true, // Include createdAt field
        updatedAt: true, // Include updatedAt field
      },
    });
  }
}
