import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreataEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsDate()
  @IsNotEmpty()
  startDate: Date;
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
  @IsOptional()
  @IsNumber()
  locationId: number;
}
