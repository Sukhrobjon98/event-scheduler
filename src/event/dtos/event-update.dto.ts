import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'This may edit or not',
    example: 'MDC23',
  })
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
