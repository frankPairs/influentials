import React from 'react';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';

import { CampaignsListView } from './views';

function CampaignsRouter({ match }: RouteChildrenProps) {
  return (
    <Switch>
      <Route path={match.path} exact component={CampaignsListView} />
    </Switch>
  );
}

export default CampaignsRouter;
