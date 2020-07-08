import { useSelector } from 'react-redux';

import {
  selectCampaignDataList,
  selectCampaignLoading,
  selectCampaignError,
  CampaignNormalized,
} from '../../../../store/campaigns';
import { selectBrandById } from '../../../../store/brands';
import { selectChannelsById } from '../../../../store/channels';
import { AppState } from '../../../../store/types';

const useSelectCampaignListData = () => useSelector(selectCampaignDataList);

const useSelectCampaignLoading = () => useSelector(selectCampaignLoading);

const useSelectCampaignError = () => useSelector(selectCampaignError);

const useSelectCampaignResponse = () => ({
  data: useSelectCampaignListData(),
  loading: useSelectCampaignLoading(),
  error: useSelectCampaignError(),
});

const useSelectCampaignBrand = (campaign: CampaignNormalized) =>
  useSelector((state: AppState) => selectBrandById(state, campaign.brand));

const useSelectCampaignChannels = (campaign: CampaignNormalized) =>
  useSelector((state: AppState) => selectChannelsById(state, campaign.channels));

export {
  useSelectCampaignListData,
  useSelectCampaignError,
  useSelectCampaignLoading,
  useSelectCampaignResponse,
  useSelectCampaignBrand,
  useSelectCampaignChannels,
};
