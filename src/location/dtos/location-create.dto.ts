import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { LCreate } from '../interface/location.interface';

export class LocationCreateDto implements LCreate {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lat: string;

  @IsString()
  @IsNotEmpty()
  long: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
