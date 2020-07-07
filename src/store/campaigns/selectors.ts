import { AppState } from '../types';

const selectCampaignData = (state: AppState) => state.campaigns.data;

const selectCampaignLoading = (state: AppState) => state.campaigns.loading;

const selectCampaignError = (state: AppState) => state.campaigns.error;

export { selectCampaignData, selectCampaignLoading, selectCampaignError };
