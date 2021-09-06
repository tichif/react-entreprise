import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import About from './views/pages/About';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
