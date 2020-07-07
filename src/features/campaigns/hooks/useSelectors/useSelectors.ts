import { useSelector } from 'react-redux';

import { selectCampaignData, selectCampaignLoading, selectCampaignError } from '../../../../store/campaigns';

const useSelectCampaignData = () => useSelector(selectCampaignData);

const useSelectCampaignLoading = () => useSelector(selectCampaignLoading);

const useSelectCampaignError = () => useSelector(selectCampaignError);

const useSelectCampaignResponse = () => ({
  data: useSelectCampaignData(),
  loading: useSelectCampaignLoading(),
  error: useSelectCampaignError(),
});

export { useSelectCampaignData, useSelectCampaignError, useSelectCampaignLoading, useSelectCampaignResponse };
