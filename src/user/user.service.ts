import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';
import { IUser } from './interface/user.interface';
import { EventService } from 'src/event/event.service';
import { ECreate, EUpdate, IEvent } from 'src/event/interface/event.interface';
import { LocationService } from 'src/location/location.service';
import { LCreate, LUpdate } from 'src/location/interface/location.interface';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userModel: Repository<User>) {}

  async createUser(user: IUser): Promise<User> {
    let userData = await this.userModel.findOne({
      where: { email: user.email },
    });
    if (userData) {
      throw new HttpException('User already exists', 400);
    }
    let newUser = await this.userModel.create(user);
    await this.userModel.save(newUser);
    return newUser;
  }

  async findUserByEmail(email: string): Promise<User> {
    let userData = await this.userModel.findOne({
      where: { email: email },
    });
    if (!userData) {
      throw new HttpException('User not found', 404);
    }
    return userData;
  }
}
