import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { LCreate, LUpdate } from './interface/location.interface';
import { LocationCreateDto } from './dtos/location-create.dto';
import { LocationUpdateDto } from './dtos/location-update.dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async getAllLocations() {
    return this.locationService.getAllLocations();
  }
  @Post()
  async createLocation(@Body() locationData: LocationCreateDto) {
    return await this.locationService.createLocation(locationData);
  }
  @Put(':id')
  async updateLocation(
    @Param('id') id: number,
    @Body() locationData: LocationUpdateDto,
  ) {
    return await this.locationService.updateLocation(id, locationData);
  }
  @Delete(':id')
  async deleteLocation(@Param('id') id: number) {
    return this.locationService.deleteLocation(id);
  }
}
