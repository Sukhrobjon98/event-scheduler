import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreataEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/event-update.dto';
import { EFilter } from './interface/event.interface';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getByFilterWithDate(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.eventService.filterEvent({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
  }

  @Post()
  async createEvent(@Body() createData: CreataEventDto) {
    return this.eventService.createEvent(createData);
  }
  @Put(':id')
  async updateEvent(
    @Param('id') id: number,
    @Body() updateData: UpdateEventDto,
  ) {
    return this.eventService.updateEvent(id, updateData);
  }
  @Delete(':id')
  deleteEvenet(@Param('id') id: number) {
    return this.eventService.deleteEvnent(id);
  }
}
