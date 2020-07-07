import { Dispatch } from 'redux';

import { setBrandData } from '../brands';
import { setChannelData } from '../channels';
import {
  SetCampaignDataAction,
  SetCampaignErrorAction,
  SetCampaignLoadingAction,
  CampaignsActionTypes,
  CampaignNormalized,
} from './types';
import { getCampaigns } from './services';

const setCampaignData = (campaigns: { [campaignId: number]: CampaignNormalized }): SetCampaignDataAction => ({
  type: CampaignsActionTypes.SET_CAMPAIGN_DATA,
  payload: campaigns,
});

const setCampaignLoading = (): SetCampaignLoadingAction => ({
  type: CampaignsActionTypes.SET_CAMPAIGN_LOADING,
});

const setCampaignError = (error: string): SetCampaignErrorAction => ({
  type: CampaignsActionTypes.SET_CAMPAIGN_ERROR,
  payload: error,
});

const getCampaignsAction = () => async (dispatch: Dispatch) => {
  dispatch(setCampaignLoading());

  try {
    const {
      entities: { campaigns, brands, channels },
    } = await getCampaigns();

    dispatch(setCampaignData(campaigns));
    dispatch(setBrandData(brands));
    dispatch(setChannelData(channels));
  } catch (err) {
    dispatch(setCampaignError(err.message));
  }
};

export { setCampaignData, setCampaignLoading, setCampaignError, getCampaignsAction };
