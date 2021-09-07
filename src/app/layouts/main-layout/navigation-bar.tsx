import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
  }),
);

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'} className={`${classes.link} ${classes.title}`}>
            LOGO
          </Link>
          <Button color="inherit">
            <Link to={'/'} className={classes.link}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/about'} className={classes.link}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/dashboard'} className={classes.link}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/login'} className={classes.link}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
