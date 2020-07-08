import { normalize } from 'normalizr';

import { api } from '../api';
import { GetCampaignResponse, CampaignNormalized, GetCampaignsEntities } from './types';
import { campaignsListSchema } from './normalizrSchema';

function getCampaigns() {
  return api
    .get<GetCampaignResponse>('/campaigns')
    .then((response) =>
      normalize<CampaignNormalized, GetCampaignsEntities>(response.data.data.campaigns, campaignsListSchema),
    );
}

export { getCampaigns };
