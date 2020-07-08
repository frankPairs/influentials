import React from 'react';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';

import { DashboardView } from './views';

function DashboardRouter({ match }: RouteChildrenProps) {
  if (!match) {
    return null;
  }

  return (
    <Switch>
      <Route path={match.path} exact component={DashboardView} />
    </Switch>
  );
}

export default DashboardRouter;
