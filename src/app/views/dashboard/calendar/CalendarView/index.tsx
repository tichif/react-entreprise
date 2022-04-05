import React, { useEffect } from 'react';
import { getEvents } from 'features/calendar/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { Container, makeStyles } from '@material-ui/core';

import Page from 'app/components/page';
import Header from './Header';

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

  const { loading, error, events } = useSelector(
    (state: RootState) => state.calendar,
  );

  return (
    <Page className={classes.root} title="Calendar">
      <Container maxWidth={false}>
        <Header />
        <h1>Calendar Works !!!</h1>
        {loading && <h2>Loading....</h2>}
        {error && <h2>Something went wrong</h2>}

        <ul>{!loading && events?.map(e => <li key={e.id}>{e.title}</li>)}</ul>
      </Container>
    </Page>
  );
};

export default Index;
