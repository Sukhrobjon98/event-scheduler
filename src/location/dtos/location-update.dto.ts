import { IsOptional, IsNumber, IsString } from 'class-validator';
import { LUpdate } from '../interface/location.interface';

export class LocationUpdateDto implements LUpdate {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  lat: string;

  @IsString()
  @IsOptional()
  long: string;

  @IsString()
  @IsOptional()
  description: string;
}
