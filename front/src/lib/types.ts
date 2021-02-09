export interface ISelectedContainer {
  name: string;
  weight: number;
}

export interface ICord {
  x: string;
  y: string;
}

export enum LocationType {
  departure,
  arrival,
}

export interface IDriving {
  start: string;
  goal: string;
}

export type TtransportType = 'motorcycle' | 'walk/Bike';
