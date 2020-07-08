import React, { ComponentProps } from 'react';
import { render, cleanup } from '@testing-library/react';

import { mockCampaingsNormalized, mockBrandsMap, mockChannelsMap } from '../../../../__mocks__';
import { MockThemeProvider } from '../../../../tests/MockThemeProvider';
import { useSelectCampaignBrand, useSelectCampaignChannels } from '../../hooks';
import { CampaignCard } from './CampaignCard';

jest.mock('../../hooks');

function getWrapper(overrideProps?: Partial<ComponentProps<typeof CampaignCard>>) {
  return render(
    <MockThemeProvider>
      <CampaignCard campaign={mockCampaingsNormalized[1]} {...overrideProps} />
    </MockThemeProvider>,
  );
}
describe('<CampaignCard />', () => {
  beforeEach(() => {
    const mockUseSelectCampaingBrand = useSelectCampaignBrand as jest.Mock;
    const mockUseSelectCampaignChannels = useSelectCampaignChannels as jest.Mock;

    mockUseSelectCampaingBrand.mockReturnValue(mockBrandsMap[1]);
    mockUseSelectCampaignChannels.mockReturnValue(Object.values(mockChannelsMap));
  });

  afterEach(cleanup);

  it('should show campaign image', () => {
    const { getByAltText } = getWrapper();
    const imageEl = getByAltText('campaign 1') as HTMLImageElement;

    expect(imageEl.src).toBe('http://localhost/campaign1.jpg');
  });

  it('should show campaign title', () => {
    const { getByText } = getWrapper();

    getByText('campaign 1');
  });

  it('should show campaign reward', () => {
    const { getByText } = getWrapper();

    getByText('reward 1');
  });

  it('should show brand logo reward', () => {
    const { getByAltText } = getWrapper();
    const imageEl = getByAltText('Tesla') as HTMLImageElement;

    expect(imageEl.src).toBe('http://localhost/tesla.jpg');
  });
});
