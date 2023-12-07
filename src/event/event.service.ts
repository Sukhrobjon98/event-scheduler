import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './model/event.entity';
import { Between, Repository } from 'typeorm';
import { ECreate, EFilter, EUpdate, IEvent } from './interface/event.interface';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private eventModel: Repository<Event>) {}

  async filterEvent(filterDate: EFilter, id: number): Promise<any> {
    let filterEvent = await this.eventModel.find({
      relations: ['location'],
      where: {
        startDate: Between(
          new Date(filterDate.startDate),
          new Date(filterDate.endDate),
        ),
        userId: id,
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

    if (filterEvent.length == 0) {
      throw new NotFoundException();
    }
    return filterEvent;
  }

  async createEvent(event: ECreate, id: number): Promise<Event> {
    let newEvent = await this.eventModel.create({
      ...event,
      userId: id,
    });

    await this.eventModel.save(newEvent);

    return newEvent;
  }

  async updateEvent(id: number, event: EUpdate): Promise<Event> {
    const getEvent = await this.eventModel.findOne({ where: { id } });
    if (!getEvent) {
      throw new NotFoundException();
    }
    await this.eventModel.update(id, event);
    return await this.eventModel.findOne({ where: { id } });
  }
  async deleteEvnent(id: number): Promise<any> {
    const event = await this.eventModel.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException();
    }
    return await this.eventModel.delete(id);
  }
}
