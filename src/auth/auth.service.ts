import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ULogin, URegister, UToken } from './interface/auth.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: URegister) {
    const userData = await this.userService.createUser({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    });
    const access_token = await this.tokenGenerator({
      id: userData.id,
      fullname: userData.fullname,
    });
    return { ...access_token };
  }

  async signIn(user: ULogin) {
    let userData = await this.userService.findUserByEmail(user.email);
    if (!userData) {
      throw new UnauthorizedException();
    }
    let isMatch = await bcrypt.compare(user.password, userData.password);

    if (!isMatch) {
      throw new HttpException('Invalid credentials', 401);
    }
    const access_token = await this.tokenGenerator({
      id: userData.id,
      fullname: userData.fullname,
    });
    return { ...access_token };
  }

  async tokenGenerator(user: UToken) {
    const payload = { fullnam: user.fullname, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


