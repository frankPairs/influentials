import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCampaignsAction } from '../../../../store/campaigns';
import { useSelectCampaignResponse } from '../useSelectors/useSelectors';

function useGetCampaigns() {
  const dispatch = useDispatch();
  const response = useSelectCampaignResponse();

  useEffect(function request() {
    dispatch(getCampaignsAction());
  }, []);

  return response;
}

export { useGetCampaigns };
