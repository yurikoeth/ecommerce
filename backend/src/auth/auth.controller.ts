import { Controller, Post, Get, Query, Body, UsePipes, ValidationPipe, BadRequestException, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
    @UsePipes(new ValidationPipe()) // Validates the incoming request using the DTO
      async signUp(@Body() createUserDto: CreateUserDto) {
        const {firstName, lastName, email, password, } = createUserDto;

        // Check if the email is already in use
        const userExists = await this.authService.findUserByEmail(email);
        if (userExists) {
          throw new BadRequestException('Email is already in use');
        }

        // Create the user
        const newUser = await this.authService.createUser({firstName, lastName, email, password,});

        return { message: 'User successfully signed up', userId: newUser.id };
    }

    @Get('user-by-email')
    async getUserByEmail(@Query('email') email: string) {
      const user = await this.authService.findUserByEmail(email);
      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }
      return user;
    }
    
  @Post('signin')
    async signin(@Body() signInDto: SignInDto) {
      try {
        return await this.authService.signin(signInDto.email, signInDto.password);
      } catch (error) {
        if (error instanceof Error) {
          throw new UnauthorizedException(error.message);
        } else {
          throw new UnauthorizedException('An unexpected error occurred');
        }
      }
  }

  @Get('users')
  async getAllUsers() {
    return this.authService.getAllUsers();
  }
}
