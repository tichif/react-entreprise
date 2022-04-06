import moment from 'moment';

import { EventType } from 'models/calendar-types';

export const getInitialValues = (
  event?: EventType,
  range?: { start: number; end: number },
) => {
  if (event) {
    const defaultEvent = {
      allDay: false,
      color: '',
      description: '',
      end: moment().add(30, 'minutes').toDate(),
      start: moment().toDate(),
      title: '',
      submit: null,
    };
    return { ...defaultEvent, event };
  }
  if (range) {
    const defaultEvent = {
      allDay: false,
      color: '',
      description: '',
      end: new Date(range.end),
      start: new Date(range.start),
      title: '',
      submit: null,
    };
    return { ...defaultEvent, event };
  }
  return {
    allDay: false,
    color: '',
    description: '',
    end: moment().add(30, 'minutes').toDate(),
    start: moment().toDate(),
    title: '',
    submit: null,
  };
};
