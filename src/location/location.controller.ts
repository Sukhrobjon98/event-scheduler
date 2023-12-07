import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { LCreate, LUpdate } from './interface/location.interface';
import { LocationCreateDto } from './dtos/location-create.dto';
import { LocationUpdateDto } from './dtos/location-update.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User, UserData } from 'src/auth/user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('location')
@ApiTags('Location API')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Successfully' })
  async getAllLocations(@User() user: UserData) {
    return this.locationService.getAllLocations(user.id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The location has been successfully created ',
  })
  async createLocation(
    @Body() locationData: LocationCreateDto,
    @User() user: UserData,
  ) {
    return await this.locationService.createLocation(locationData, user.id);
  }
  @Put(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
    description: 'THis is for updateting location with id',
  })
  @ApiResponse({
    status: 200,
    description: 'The location has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Location not found' })
  async updateLocation(
    @Param('id') id: number,
    @Body() locationData: LocationUpdateDto,
  ) {
    return await this.locationService.updateLocation(id, locationData);
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'This is for deleting location with id ',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The location has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Location not found' })
  async deleteLocation(@Param('id') id: number) {
    return this.locationService.deleteLocation(id);
  }
}
