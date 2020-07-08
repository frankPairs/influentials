import React from 'react';

import { CampaignNormalized } from '../../../../store/campaigns';
import { useSelectCampaignBrand } from '../../hooks';
import { CardStyled } from './CampaignCard.styled';

interface Props {
  campaign: CampaignNormalized;
}

function CampaignCard({ campaign }: Props) {
  const brand = useSelectCampaignBrand(campaign);

  return (
    <CardStyled key={campaign.id}>
      <div className="picture-wrapper">
        <img className="picture" alt={campaign.title} src={campaign.image} />
      </div>
      <div className="content-wrapper">
        <div className="info-wrapper">
          <p className="title">{campaign.title}</p>
          <p className="reward">{campaign.reward}</p>
        </div>
        <div className="brand-logo-wrapper">
          {brand && <img className="brand-logo" alt={brand.name} src={brand.image} />}
        </div>
      </div>
    </CardStyled>
  );
}

export { CampaignCard };
