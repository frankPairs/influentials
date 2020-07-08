import React from 'react';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';

import { MessengerListView } from './views';

function MessengerRouter({ match }: RouteChildrenProps) {
  return (
    <Switch>
      <Route path={match.path} exact component={MessengerListView} />
    </Switch>
  );
}

export default MessengerRouter;
