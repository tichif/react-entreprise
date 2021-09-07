import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import Home from './views/pages/Home';
// import About from './views/pages/About';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './layouts/dashboard-layout';
// import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
// import SettingsAndPrivacy from './views/dashboard/settings-and-privacy';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route
          exact
          path="/about"
          component={lazy(() => import('./views/pages/About'))}
        />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Route
          path={`/dashboard`}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={lazy(
                    () => import('./views/dashboard/dashboard-default-content'),
                  )}
                />
                <Route
                  exact
                  path={path + '/settings-and-privacy'}
                  component={lazy(
                    () => import('./views/dashboard/settings-and-privacy'),
                  )}
                />
              </Switch>
            </Dashboard>
          )}
        />
        <Redirect from={'*'} to="not-found" exact />
      </Switch>
    </Suspense>
  );
};

export default Routes;
