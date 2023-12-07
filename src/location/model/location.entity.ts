import { Event } from 'src/event/model/event.entity';
import { User } from 'src/user/model/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.locations)
  @JoinColumn({ name: 'userId' })
  user: User;
}
