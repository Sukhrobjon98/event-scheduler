import { IsOptional, IsNumber, IsString } from 'class-validator';
import { LUpdate } from '../interface/location.interface';
import { ApiProperty } from '@nestjs/swagger';

export class LocationUpdateDto implements LUpdate {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'This is name od location',
    example: 'Fergana',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'This is lat of location area',
    example: '102.6',
  })
  lat: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'This is long of location area',
    example: '109.3',
  })
  long: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'This is info about location area',
    example: 'Here near to the Makro',
  })
  description: string;
}
