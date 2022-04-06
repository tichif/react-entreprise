import React from 'react';
import moment from 'moment';

import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { DateTimePicker } from '@material-ui/pickers';
import { Trash as TrashIcon } from 'react-feather';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormHelperText,
  IconButton,
  makeStyles,
  SvgIcon,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
/*the async actions we created earlier in the calendarSlice */
import {
  createEvent,
  deleteEvent,
  updateEvent,
} from 'features/calendar/calendarSlice';
import { EventType } from 'models/calendar-types';
import { getInitialValues } from './defaultValues';
import { validation } from './validations';

type Props = {
  event: EventType;
  onAddComplete?: () => void;
  onCancel?: () => void;
  onDeleteComplete?: () => void;
  onEditComplete?: () => void;
  range?: { start: number; end: number };
};

const useStyles = makeStyles(theme => ({
  root: {},
  confirmButton: {
    marginLeft: theme.spacing(2),
  },
}));

const AddEditForm = ({
  event,
  onAddComplete,
  onCancel,
  onDeleteComplete,
  onEditComplete,
  range,
}: Props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const isCreating = !event;

  // delete event
  const handleDelete = async (): Promise<void> => {
    try {
      await dispatch(deleteEvent(event?.id));
      onDeleteComplete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      validationSchema={validation}
      initialValues={getInitialValues(event, range)}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting },
      ) => {
        try {
          const data = {
            allDay: values.allDay,
            title: values.title,
            description: values.description,
            end: values.end,
            start: values.start,
            id: '',
          };

          if (event) {
            data.id = event.id;
            await dispatch(updateEvent(data));
          } else {
            await dispatch(createEvent(data));
          }

          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Calendar updated', {
            variant: 'success',
          });
          if (isCreating) {
            onAddComplete();
          } else {
            onEditComplete();
          }
        } catch (error) {
          console.error(error);
          setStatus({ success: false });
          setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldTouched,
        setFieldValue,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box p={3}>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
              color="textPrimary"
            >
              {isCreating ? 'Add Event' : 'Edit Event'}
            </Typography>
          </Box>
          <Box p={3}>
            <TextField
              error={Boolean(touched.title && errors.title)}
              fullWidth
              helperText={touched.title && errors.title}
              label="Title"
              name="title"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              variant="outlined"
            />
            <Box mt={2}>
              <TextField
                error={Boolean(touched.description && errors.description)}
                fullWidth
                helperText={touched.description && errors.description}
                label="Description"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                variant="outlined"
              />
            </Box>
            <Box mt={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.allDay}
                    name="allDay"
                    onChange={handleChange}
                  />
                }
                label="All day"
              />
            </Box>
            <Box mt={2}>
              <DateTimePicker
                fullWidth
                inputVariant="outlined"
                label="Start date"
                name="start"
                onClick={() => setFieldTouched('end')} // install the @date-io/moment@1.x
                onChange={date => setFieldValue('start', date)} // and use it in MuiPickersUtilsProvider
                value={values.start}
              />
            </Box>
            <Box mt={2}>
              <DateTimePicker
                fullWidth
                inputVariant="outlined"
                label="End date"
                name="end"
                onClick={() => setFieldTouched('end')} // install the @date-io/moment@1.x
                onChange={date => setFieldValue('end', date)} // and use it in MuiPickersUtilsProvider
                value={values.end}
              />
            </Box>
            {Boolean(touched.end && errors.end) && (
              <Box mt={2}>
                <FormHelperText error>{errors.end}</FormHelperText>
              </Box>
            )}
          </Box>
          <Divider />
          <Box p={2} display="flex" alignItems="center">
            {!isCreating && (
              <IconButton onClick={() => handleDelete()}>
                <SvgIcon>
                  <TrashIcon />
                </SvgIcon>
              </IconButton>
            )}
            <Box flexGrow={1} />
            <Button onClick={onCancel}>Cancel</Button>
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              color="primary"
              className={classes.confirmButton}
            >
              Confirm
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default AddEditForm;
