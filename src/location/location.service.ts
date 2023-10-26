import { Injectable } from '@nestjs/common';
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
    this.locationModel.update(id, locationData);
    return await this.locationModel.findOne({ where: { id } });
  }

  async deleteLocation(id: number): Promise<any> {
    return await this.locationModel.delete(id);
  }

  async getAllLocations(): Promise<Location[]> {
    return await this.locationModel.find();
  }
}
