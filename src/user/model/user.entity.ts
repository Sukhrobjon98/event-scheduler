import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public fullname: string;
  @Column({
    unique: true,
  })
  public email: string;
  @Column()
  public password: string;
}