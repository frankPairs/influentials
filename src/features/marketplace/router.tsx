import React from 'react';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';

import { MarketplaceListView } from './views';

function MarketplaceRouter({ match }: RouteChildrenProps) {
  if (!match) {
    return null;
  }

  return (
    <Switch>
      <Route path={match.path} exact component={MarketplaceListView} />
    </Switch>
  );
}

export default MarketplaceRouter;
