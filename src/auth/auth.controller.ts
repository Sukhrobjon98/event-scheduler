import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { URegister } from './interface/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async registerUser(@Body() body: URegister) {
    
    return this.authService.signUp(body);
  }

  @Post('login')
  async loginUser(@Body() body: URegister) {
    return this.authService.signIn(body);
  }
}
