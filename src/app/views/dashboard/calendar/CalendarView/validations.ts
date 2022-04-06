import * as Yup from 'yup';

export const validation = Yup.object().shape({
  allDay: Yup.bool(),
  description: Yup.string().max(5000),
  end: Yup.date().when(
    'start',
    (start: Date, schema: any) =>
      start && schema.min(start, 'End date must be later than start date'),
  ),
  start: Yup.date(),
  title: Yup.string().max(255).required('Title is required'),
});
