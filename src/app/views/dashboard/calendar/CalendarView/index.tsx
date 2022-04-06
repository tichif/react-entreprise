import React, { useEffect } from 'react';
import {
  getEvents,
  openModal,
  closeModal,
} from 'features/calendar/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import {
  Container,
  makeStyles,
  Dialog,
  Paper,
  useMediaQuery,
} from '@material-ui/core';

import Page from 'app/components/page';
import Header from './Header';
import AddEditForm from './AddEditForm';
import { EventType, ViewType } from 'models/calendar-types';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const Index = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const handleAddClick = (): void => {
    dispatch(openModal());
  };

  const handleCloseModal = (): void => {
    dispatch(closeModal());
  };

  const { loading, error, events, isModalOpen, selectedRange } = useSelector(
    (state: RootState) => state.calendar,
  );

  const selectedEventSelector = (state: RootState): EventType | null => {
    const { events, selectedEventId } = state.calendar;

    if (selectedEventId) {
      return events?.find(_event => _event.id === selectedEventId);
    } else {
      return null;
    }
  };

  const selectedEvent = useSelector(selectedEventSelector);

  return (
    <Page className={classes.root} title="Calendar">
      <Container maxWidth={false}>
        <Header onAddClick={handleAddClick} />
        <Dialog
          maxWidth="sm"
          fullScreen
          onClose={handleCloseModal}
          open={isModalOpen}
        >
          {isModalOpen && (
            <AddEditForm
              event={selectedEvent}
              range={selectedRange}
              onAddComplete={handleCloseModal}
              onCancel={handleCloseModal}
              onDeleteComplete={handleCloseModal}
              onEditComplete={handleCloseModal}
            />
          )}
        </Dialog>
      </Container>
    </Page>
  );
};

export default Index;
