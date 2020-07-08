import { renderHook, cleanup } from '@testing-library/react-hooks';

import { mockCampaingsNormalized } from '../../../../__mocks__';
import { selectCampaignDataList, selectCampaignLoading, selectCampaignError } from '../../../../store/campaigns';
import { selectBrandById } from '../../../../store/brands';
import { selectChannelsById } from '../../../../store/channels';
import {
  useSelectCampaignListData,
  useSelectCampaignLoading,
  useSelectCampaignError,
  useSelectCampaignResponse,
  useSelectCampaignBrand,
  useSelectCampaignChannels,
} from './useSelectors';

const mockState = {};

jest.mock('react-redux', () => ({
  useSelector: (fn: (mockState: any) => void) => fn(mockState),
}));
jest.mock('../../../../store/campaigns');
jest.mock('../../../../store/brands');
jest.mock('../../../../store/channels');

describe('useSelectors', () => {
  afterEach(cleanup);

  it('should call selectCampaignDataList selector after calling useSelectCampaignListData', () => {
    renderHook(() => useSelectCampaignListData());

    expect(selectCampaignDataList).toHaveBeenCalledTimes(1);
  });

  it('should call selectCampaignLoading selector after calling useSelectCampaignLoading', () => {
    renderHook(() => useSelectCampaignLoading());

    expect(selectCampaignLoading).toHaveBeenCalledTimes(1);
  });

  it('should call selectCampaignError selector after calling useSelectCampaignError', () => {
    renderHook(() => useSelectCampaignError());

    expect(selectCampaignError).toHaveBeenCalledTimes(1);
  });

  it('should get campaign data, loading and error values after calling useSelectCampaignResponse', () => {
    renderHook(() => useSelectCampaignResponse());

    expect(selectCampaignDataList).toHaveBeenCalledTimes(1);
    expect(selectCampaignLoading).toHaveBeenCalledTimes(1);
    expect(selectCampaignError).toHaveBeenCalledTimes(1);
  });

  it('should call selectBrandById selector after calling useSelectCampaignBrand', () => {
    const campaign = mockCampaingsNormalized[1];
    renderHook(() => useSelectCampaignBrand(campaign));

    expect(selectBrandById).toHaveBeenCalledWith(mockState, campaign.brand);
  });

  it('should call selectChannelsById selector after calling useSelectCampaignBrand', () => {
    const campaign = mockCampaingsNormalized[1];
    renderHook(() => useSelectCampaignChannels(campaign));

    expect(selectChannelsById).toHaveBeenCalledWith(mockState, campaign.channels);
  });
});
