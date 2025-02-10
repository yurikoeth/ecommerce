import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // Initialize the Prisma client
  private prisma = new PrismaClient();

  /**
   * Create a new user
   * @param firstName - User's first name
   * @param lastName - User's last name
   * @param email - User's email address
   * @param password - User's plain text password
   * @returns The created user object
   */
  async createUser(data: { email: string; password: string; firstName: string; lastName: string }) {
    const { email, password, firstName, lastName } = data;
  
    // Check if the email already exists
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create the user
    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });
  }
  

  /**
   * Find a user by their email
   * @param email - User's email address
   * @returns The user object with selected fields
   */
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true, // User ID
        email: true, // User email
        firstName: true, // User name
        lastName: true, // User name
        createdAt: true, // Account creation timestamp
        updatedAt: true, // Last update timestamp
      },
    });
  }

  /**
   * Authenticate a user using their email and password
   * @param email - User's email address
   * @param password - User's plain text password
   * @returns The authenticated user object (excluding the password)
   * @throws UnauthorizedException - If the email or password is invalid
   */
  async signin(email: string, password: string) {
    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Throw an exception if the user is not found
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Verify the password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Exclude the password from the returned user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Get all users in the database
   * @returns An array of user objects with selected fields
   */
  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true, // User ID
        email: true, // User email
        firstName: true,
        lastName: true, // User name
        createdAt: true, // Account creation timestamp
        updatedAt: true, // Last update timestamp
      },
    });
  }
}
