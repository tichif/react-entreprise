import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    root: {
      minHeight: '100%',
      paddingTop: theme.spacing(3),
      paddingBottom: 100,
    },
  }),
);

const ProductListView = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Results />
    </Container>
  );
};

export default ProductListView;
