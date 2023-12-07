import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'Event name',
    example: 'DevFas23',
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is title about event',
    example: 'The best devfast23',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is description',
    example: 'We will conversation about Nodejs',
  })
  description: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is Start event time',
    example: '2023-23-05',
  })
  startDate: Date;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This is End event time',
    example: '2023-12-10',
  })
  endDate: Date;
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'This is locationid for relation with other table',
    example:1
  })
  locationId: number;
}
