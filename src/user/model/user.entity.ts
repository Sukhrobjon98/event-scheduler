import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from 'src/location/model/location.entity';
import { Event } from 'src/event/model/event.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public username: string;
  @Column({
    unique: true,
  })
  public email: string;
  @Column()
  public password: string;

  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];

  @OneToMany(() => Event, event => event.user)
  events: Event[];
}
