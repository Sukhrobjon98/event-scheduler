import { type } from 'os';

export interface ILocation {
  id: number;
  name: string;
  lat: string;
  long: string;
  description: string;
}

export type LCreate = Omit<ILocation, 'id'>;
export type LUpdate = Partial<ILocation>;
