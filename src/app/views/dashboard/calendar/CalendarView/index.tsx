import React, { useEffect } from 'react';
import { getEvents } from 'features/calendar/calendarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const { loading, error, events } = useSelector(
    (state: RootState) => state.calendar,
  );

  return (
    <>
      <h1>Calendar Works !!!</h1>
      {loading && <h2>Loading....</h2>}
      {error && <h2>Something went wrong</h2>}

      <ul>
        {events?.map(e => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
