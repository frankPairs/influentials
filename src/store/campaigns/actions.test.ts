import MockAdapter from 'axios-mock-adapter';
import { normalize } from 'normalizr';

import { api } from '../api';
import { mockCampaingsNormalized, mockCampaignResponse } from '../../__mocks__';
import { setCampaignData, setCampaignLoading, setCampaignError, getCampaignsAction } from './actions';
import { CampaignsActionTypes, CampaignNormalized, GetCampaignsEntities } from './types';
import { campaignsListSchema } from './normalizrSchema';
import { setBrandData } from '../brands';
import { setChannelData } from '../channels';

const mockAxios = new MockAdapter(api);

describe('campaigns actions', () => {
  it('should return the right action after calling setCampaignData action', () => {
    const result = setCampaignData(mockCampaingsNormalized);

    expect(result).toEqual({
      type: CampaignsActionTypes.SET_CAMPAIGN_DATA,
      payload: mockCampaingsNormalized,
    });
  });

  it('should return the right action after calling setCampaignLoading action', () => {
    const result = setCampaignLoading();

    expect(result).toEqual({
      type: CampaignsActionTypes.SET_CAMPAIGN_LOADING,
    });
  });

  it('should return the right action after calling setCampaignError action', () => {
    const result = setCampaignError('error');

    expect(result).toEqual({
      type: CampaignsActionTypes.SET_CAMPAIGN_ERROR,
      payload: 'error',
    });
  });

  describe('getCampaignAction', () => {
    const mockDispatch = jest.fn();

    it('should trigger setCampaignLoading', async () => {
      mockAxios.onGet('/campaigns').reply(200, {});
      await getCampaignsAction()(mockDispatch);
    });

    it('should hydrate the state after request was successful', async () => {
      mockAxios.onGet('/campaigns').reply(200, mockCampaignResponse);

      await getCampaignsAction()(mockDispatch);

      const { entities } = normalize<CampaignNormalized, GetCampaignsEntities>(
        mockCampaignResponse.data.campaigns,
        campaignsListSchema,
      );

      expect(mockDispatch).toHaveBeenCalledWith(setCampaignData(entities.campaigns));
      expect(mockDispatch).toHaveBeenCalledWith(setBrandData(entities.brands));
      expect(mockDispatch).toHaveBeenCalledWith(setChannelData(entities.channels));
    });

    it('should trigger an error after request was failed', async () => {
      mockAxios.onGet('/campaigns').reply(500);

      await getCampaignsAction()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(setCampaignError('Request failed with status code 500'));
    });
  });
});
