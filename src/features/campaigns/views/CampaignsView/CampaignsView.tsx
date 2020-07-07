import React from 'react';

import { useGetCampaigns } from '../../hooks';

function CampaignsView() {
  const response = useGetCampaigns();

  console.log(response);
  return (
    <div>
      <h1>Marketplace</h1>
    </div>
  );
}

export { CampaignsView };
