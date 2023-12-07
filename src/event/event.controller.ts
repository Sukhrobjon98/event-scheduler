import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreataEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/event-update.dto';
import { EFilter } from './interface/event.interface';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User, UserData } from 'src/auth/user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('event')
@ApiTags('Event API')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  @ApiQuery({
    name: 'startDate',
    description: 'This start time query',
    type: Date,
    example: '2023-12-05',
  })
  @ApiQuery({
    name: 'endDate',
    type: Date,
    description: 'This start time query',
    example: '2023-12-09',
  })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully filtered.',
  })
  @ApiResponse({ status: 404, description: 'Event not found' })
  async getByFilterWithDate(
    @User() user: UserData,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.eventService.filterEvent(
      {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
      user.id,
    );
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The event has been successfully created.',
  })
  async createEvent(@Body() createData: CreataEventDto,@User() user:UserData) {
    return this.eventService.createEvent(createData,user.id);
  }
  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'This is id  for updateting event data',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully updated',
  })
  @ApiResponse({ status: 404, description: 'The event not found' })
  async updateEvent(
    @Param('id') id: number,
    @Body() updateData: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(id, updateData);
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'This is id for updateting event data',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The event has been successfully deleted.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request. Invalid input.' })
  @ApiResponse({ status: 404, description: 'Event not found' })
  deleteEvenet(@Param('id') id: number) {
    return this.eventService.deleteEvnent(id);
  }
}
