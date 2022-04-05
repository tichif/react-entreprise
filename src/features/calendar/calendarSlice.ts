import {
  createSlice,
  ThunkAction,
  Action,
  PayloadAction,
} from '@reduxjs/toolkit';

import { RootState } from 'store/reducers';
import { EventType } from 'models/calendar-types';
import axios, { EndPoints } from 'apis/axios';

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

interface CalendarState {
  events: EventType[];
  isModalOpen: boolean;
  selectedEventId?: string;
  selectedRange?: {
    end: number;
    start: number;
  };
  loading: boolean;
  error: string;
}

const initialState: CalendarState = {
  events: [],
  isModalOpen: false,
  selectedEventId: null,
  selectedRange: null,
  loading: false,
  error: '',
};

const calendarNamespace = 'calendar';

const slice = createSlice({
  name: calendarNamespace,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    getEvents(state, action: PayloadAction<EventType[]>) {
      state.events = action.payload;
    },
  },
});

export const getEvents = (): AppThunk => async dispatch => {
  dispatch(slice.actions.setLoading(true));
  dispatch(slice.actions.setError(''));

  try {
    const response = await axios.get<EventType[]>(EndPoints.events);
    dispatch(slice.actions.getEvents(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(slice.actions.setError(error.message));
  } finally {
    dispatch(slice.actions.setLoading(false));
  }
};

export default slice.reducer;
