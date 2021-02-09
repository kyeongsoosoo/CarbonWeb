import { action, createReducer } from 'typesafe-actions';
import { TtransportType, ICord } from '../../lib/types';
import {
  DISTANCE_ACTION,
  DISTANCE_ARRIVE,
  DISTANCE_DEPARTURE,
  DISTANCE_TOTAL,
  DISTANCE_TRANSPORT,
} from './action';

export type DISTANCE_STATE = {
  departure: ICord | null;
  arrival: ICord | null;
  total: string | null;
  transport: TtransportType;
};

const initialState: DISTANCE_STATE = {
  departure: null,
  arrival: null,
  total: null,
  transport: 'motorcycle',
};

export const distance = createReducer<DISTANCE_STATE, DISTANCE_ACTION>(
  initialState,
  {
    [DISTANCE_DEPARTURE]: (state, action) => ({
      ...state,
      departure: action.payload,
    }),
    [DISTANCE_ARRIVE]: (state, action) => ({
      ...state,
      arrival: action.payload,
    }),
    [DISTANCE_TOTAL]: (state, action) => ({
      ...state,
      total: action.payload,
    }),
    [DISTANCE_TRANSPORT]: (state, action) => ({
      ...state,
      transport: action.payload,
    }),
  },
);
