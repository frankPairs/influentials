import { mockCampaingsNormalized, getMockAppState } from '../../__mocks__';
import { selectCampaignData, selectCampaignLoading, selectCampaignError, selectCampaignDataList } from './selectors';

const mockState = getMockAppState({
  campaigns: { data: mockCampaingsNormalized, loading: true, error: 'error' },
});

describe('campaign selectors', () => {
  it('should return campaigns data after calling selectCampaignData selector', () => {
    const result = selectCampaignData(mockState);

    expect(result).toEqual(mockCampaingsNormalized);
  });

  it('should return campaign loading value after calling selectCampaignLoading selector', () => {
    const result = selectCampaignLoading(mockState);

    expect(result).toBe(true);
  });

  it('should return campaign error value after calling selectCampaignError selector', () => {
    const result = selectCampaignError(mockState);

    expect(result).toBe('error');
  });

  it('should return campaign data array value after calling selectCampaignDataList selector', () => {
    const result = selectCampaignDataList(mockState);

    expect(result).toEqual(Object.values(mockCampaingsNormalized));
  });
});
