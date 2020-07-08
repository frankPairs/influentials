import { useSelector } from 'react-redux';

import {
  selectCampaignDataList,
  selectCampaignLoading,
  selectCampaignError,
  CampaignNormalized,
} from '../../../../store/campaigns';
import { selectBrandById } from '../../../../store/brands';
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

export {
  useSelectCampaignListData,
  useSelectCampaignError,
  useSelectCampaignLoading,
  useSelectCampaignResponse,
  useSelectCampaignBrand,
};
