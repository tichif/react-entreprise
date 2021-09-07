import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Header for Product View</h1>
    </div>
  );
};

export default Header;
