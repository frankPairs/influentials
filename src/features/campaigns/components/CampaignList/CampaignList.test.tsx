import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { mockCampaingsNormalized, mockBrandsMap, mockChannelsMap } from '../../../../__mocks__';
import { MockThemeProvider } from '../../../../tests/MockThemeProvider';
import { useGetCampaigns, useSelectCampaignBrand, useSelectCampaignChannels } from '../../hooks';
import { CampaignList } from './CampaignList';

jest.mock('../../hooks');

function getWrapper() {
  return render(
    <MockThemeProvider>
      <CampaignList />
    </MockThemeProvider>,
  );
}
describe('<CampaignList />', () => {
  afterEach(cleanup);

  it('should show loading spinner', () => {
    const mockUseGetCampaings = useGetCampaigns as jest.Mock;

    mockUseGetCampaings.mockReturnValue({ loading: true, data: null });

    const { getByTestId } = getWrapper();

    getByTestId('loading-spinner');
  });

  it('should show all campaign cards', () => {
    const mockUseGetCampaings = useGetCampaigns as jest.Mock;
    const mockUseSelectCampaingBrand = useSelectCampaignBrand as jest.Mock;
    const mockUseSelectCampaignChannels = useSelectCampaignChannels as jest.Mock;

    mockUseGetCampaings.mockReturnValue({ loading: false, data: Object.values(mockCampaingsNormalized) });
    mockUseSelectCampaingBrand.mockReturnValue(mockBrandsMap[1]);
    mockUseSelectCampaignChannels.mockReturnValue(Object.values(mockChannelsMap));

    const { baseElement } = getWrapper();

    expect(baseElement.querySelectorAll('li').length).toBe(4);
  });
});
