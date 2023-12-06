import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './model/location.entity';
import { Repository } from 'typeorm';
import { LCreate, LUpdate } from './interface/location.interface';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private locationModel: Repository<Location>,
  ) {}

  async createLocation(locationData: LCreate): Promise<Location> {
    let newLocation = await this.locationModel.create(locationData);
    await this.locationModel.save(newLocation);
    return newLocation;
  }

  async updateLocation(id: number, locationData: LUpdate): Promise<Location> {
    const location = await this.locationModel.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException();
    }
    await this.locationModel.update(id, {
      ...locationData,
    });
    const updatedData = await this.locationModel.findOne({ where: { id } });

    return updatedData;
  }

  async deleteLocation(id: number): Promise<any> {
    const location = await this.locationModel.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException();
    }
    await this.locationModel.delete(id);
    throw new HttpException(`id:${id} location has deleted`, 200);
  }

  async getAllLocations(): Promise<Location[]> {
    return await this.locationModel.find({
      relations: ['events'],
    });
  }
}
