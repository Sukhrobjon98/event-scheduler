import {
    IsDate,
    IsOptional,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class UpdateEventDto {
    @IsString()
    @IsOptional()
    name: string;
    @IsString()
    @IsOptional()
    description: string;
    @IsDate()
    @IsOptional()
    startDate: Date;
    @IsDate()
    @IsOptional()
    endDate: Date;
    @IsOptional()
    @IsNumber()
    locationId: number;
  }
  