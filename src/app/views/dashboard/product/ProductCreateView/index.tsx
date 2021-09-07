import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import Header from './Header';
import ProductCreateForm from './ProductCreateForm';

const useStyle = makeStyles(theme => ({}));

const ProductCreateView = () => {
  const classes = useStyle();
  return (
    <Container>
      <Header />
      <ProductCreateForm />
    </Container>
  );
};

export default ProductCreateView;
