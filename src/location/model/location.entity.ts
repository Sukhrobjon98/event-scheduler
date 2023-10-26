import { Event } from 'src/event/model/event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lat: string;
  @Column()
  long: string;
  @Column()
  description: string;
  @OneToMany(() => Event, (event) => event.location)
  events: Event[];
}
