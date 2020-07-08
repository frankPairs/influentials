import React from 'react';

import { Loading } from '../../../../components/icons';
import { useGetCampaigns } from '../../hooks';
import { CampaignCard } from '../CampignCard/CampaignCard';
import { ListStyled } from './CampaignList.styled';

function CampaignList() {
  const { loading, data: campaigns } = useGetCampaigns();

  if (loading) {
    return <Loading />;
  }

  if (!campaigns) {
    return null;
  }

  return (
    <ListStyled>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </ListStyled>
  );
}

export { CampaignList };
