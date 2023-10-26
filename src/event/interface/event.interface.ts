export interface IEvent {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  locationId: number;
}

export type ECreate = Pick<
  IEvent,
  'name' | 'description' | 'startDate' | 'endDate' | 'locationId'
>;

export type EUpdate = Partial<IEvent>;
export type EFilter = Pick<IEvent, 'startDate' | 'endDate'>;
