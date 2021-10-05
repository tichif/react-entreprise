import React, { useEffect, useState } from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

import Header from './Header';
import Results from './Results';
import { getProductsAxios } from 'services/productService';
import { ProductType } from 'models/product-type';

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
  const [products, setProducts] = useState<ProductType[]>([]);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    handleToggle();
    try {
      const { data } = await getProductsAxios();
      setProducts(data);
    } catch (error) {
      alert('Something went wrong');
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Results />
    </Container>
  );
};

export default ProductListView;
