import { normalize } from 'normalizr';

import { api } from '../api';
import { Brand } from '../brands';
import { ChannelCampaign } from '../channels';
import { GetCampaignResponse, CampaignNormalized } from './types';
import { campaignsListSchema } from './normalizrSchema';

interface GetCampaignsEntities {
  brands: Brand[];
  channels: ChannelCampaign[];
  campaigns: CampaignNormalized[];
}

function getCampaigns() {
  return api
    .get<GetCampaignResponse>('/campaigns')
    .then((response) =>
      normalize<CampaignNormalized, GetCampaignsEntities>(response.data.data.campaigns, campaignsListSchema),
    );
}

export { getCampaigns };
