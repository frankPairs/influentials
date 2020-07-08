import { pathOr } from 'ramda';

import { AppState } from '../types';
import { CampaignNormalized } from './types';

const selectCampaignData = (state: AppState) => state.campaigns.data;

const selectCampaignLoading = (state: AppState) => state.campaigns.loading;

const selectCampaignError = (state: AppState) => state.campaigns.error;

const selectCampaignDataList = (state: AppState) =>
  Object.values(pathOr<CampaignNormalized[]>([], ['campaigns', 'data'], state));

export { selectCampaignData, selectCampaignLoading, selectCampaignError, selectCampaignDataList };
