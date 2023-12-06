import { Injectable, NotFoundException } from '@nestjs/common';
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

    if (filterEvent.length == 0) {
      throw new NotFoundException();
    }
    return filterEvent;
  }

  async getAllEvents() {
    const allEvent = await this.eventModel.find({
      relations: ['location'],
    });
    return allEvent;
  }

  async createEvent(event: ECreate): Promise<Event> {
    let newEvent = await this.eventModel.create({
      ...event,
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
