import React from 'react';

import { TitleView } from '../../../../components/layout';
import { CampaignList } from '../../components';

function CampaignsView() {
  return (
    <div>
      <TitleView title="Campaigns" />
      <CampaignList />
    </div>
  );
}

export { CampaignsView };
