import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { URegister } from './interface/auth.interface';
import { UserRegisterDto } from './dtos/user.resgiter.dto';
import { UserLoginDto } from './dtos/user.login.dto';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local.auth.guard';

@Controller('auth')
@ApiTags('Auth API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async registerUser(@Body() body: UserRegisterDto) {
    return this.authService.signUp(body);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Request() req) {
    return this.authService.signIn(req.user);
  }
}
