import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { LCreate } from '../interface/location.interface';
import { ApiProperty } from '@nestjs/swagger';

export class LocationCreateDto implements LCreate {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is name of location area',
    example: 'Tashkent',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This lat of location area',
    example: '103.4',
  })
  lat: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is long of location area',
    example: '106.7',
  })
  long: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is info about location area',
    example: 'This place is Navoi street',
  })
  description: string;
}
