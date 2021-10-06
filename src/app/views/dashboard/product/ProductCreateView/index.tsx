import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import Header from './Header';
import ProductCreateForm from './ProductCreateForm';
import Page from 'app/components/page';

const useStyle = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100,
  },
}));

const ProductCreateView = () => {
  const classes = useStyle();
  return (
    <Page className={classes.root} title="Product Create">
      <Container maxWidth="lg">
        <Header />
        <ProductCreateForm />
      </Container>
    </Page>
  );
};

export default ProductCreateView;
