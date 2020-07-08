import { renderHook, cleanup } from '@testing-library/react-hooks';

import { getCampaignsAction } from '../../../../store/campaigns';
import { useGetCampaigns } from './useActions';

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
  };
});
jest.mock('../useSelectors/useSelectors');
jest.mock('../../../../store/campaigns');

describe('useActions', () => {
  afterEach(cleanup);

  describe('useGetCampaigns', () => {
    it('should call getCampaignsAction', () => {
      renderHook(() => useGetCampaigns());

      expect(getCampaignsAction).toHaveBeenCalledTimes(1);
    });
  });
});
