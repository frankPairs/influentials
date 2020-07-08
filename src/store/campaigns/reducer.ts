import { CampaignActions, CampaignState, CampaignsActionTypes } from './types';

const campaignsInitialState: CampaignState = {
  data: null,
  error: null,
  loading: false,
};

function campaignsReducer(state: CampaignState = campaignsInitialState, action: CampaignActions): CampaignState {
  switch (action.type) {
    case CampaignsActionTypes.SET_CAMPAIGN_DATA: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    }
    case CampaignsActionTypes.SET_CAMPAIGN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CampaignsActionTypes.SET_CAMPAIGN_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export { campaignsReducer, campaignsInitialState };
