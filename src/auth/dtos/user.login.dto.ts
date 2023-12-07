import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is email',
    example: 'suxrobjon1998@gmail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is password',
    example: '123456',
  })
  password: string;
}
