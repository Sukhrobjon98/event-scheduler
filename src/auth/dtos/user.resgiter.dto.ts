import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is info about User!',
    example: 'Sukhobjon',
  })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is email for Register',
    example: 'suxrobjon1998@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is password for register user',
    example: '123456',
  })
  password: string;
}
