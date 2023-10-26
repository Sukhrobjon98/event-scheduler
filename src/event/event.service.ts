import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './model/event.entity';
import { Between, Repository } from 'typeorm';
import { ECreate, EFilter, EUpdate, IEvent } from './interface/event.interface';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private eventModel: Repository<Event>) {}

  async filterEvent(filterDate: EFilter): Promise<any> {
    let filterEvent = await this.eventModel.find({
      relations: ['location'],
      where: {
        startDate: Between(
          new Date(filterDate.startDate),
          new Date(filterDate.endDate),
        ),
      },
      select: [
        'id',
        'description',
        'title',
        'startDate',
        'endDate',
        'location',
      ],
    });

    return filterEvent;
  }

  async createEvent(event: ECreate): Promise<Event> {
    console.log(event);
    
    let newEvent = await this.eventModel.create({
      ...event,
    });
    await this.eventModel.save(newEvent);
    return newEvent;
  }

  async updateEvent(id: number, event: EUpdate): Promise<Event> {
    await this.eventModel.update(id, event);
    return await this.eventModel.findOne({ where: { id } });
  }
  async deleteEvnent(id: number): Promise<any> {
    return await this.eventModel.delete(id);
  }
}
