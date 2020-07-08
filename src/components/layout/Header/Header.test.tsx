import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { MockThemeProvider } from '../../../tests/MockThemeProvider';
import { Header } from './Header';

function getWrapper(overrideProps?: Partial<ComponentProps<typeof Header>>) {
  return render(
    <MemoryRouter>
      <MockThemeProvider>
        <Header profileImg="image.jpg" {...overrideProps} />
      </MockThemeProvider>
    </MemoryRouter>,
  );
}
describe('<Header />', () => {
  afterEach(cleanup);

  it('should show menu items', () => {
    const { getByText } = getWrapper();

    getByText('Dashboard');
    getByText('Marketplace');
    getByText('Campaigns');
    getByText('Messenger');
  });

  it('should have href url for each menu item', () => {
    const { getByText } = getWrapper();

    const dashboardEl = getByText('Dashboard');
    const dashboardAnchor = dashboardEl.closest('a') as HTMLAnchorElement;
    expect(dashboardAnchor.getAttribute('href')).toBe('/dashboard');

    const marketplaceEl = getByText('Marketplace');
    const marketplaceAnchor = marketplaceEl.closest('a') as HTMLAnchorElement;
    expect(marketplaceAnchor.getAttribute('href')).toBe('/marketplace');

    const campaignsEl = getByText('Campaigns');
    const campaignsAnchor = campaignsEl.closest('a') as HTMLAnchorElement;
    expect(campaignsAnchor.getAttribute('href')).toBe('/campaigns');

    const messengerEl = getByText('Messenger');
    const messengerAnchor = messengerEl.closest('a') as HTMLAnchorElement;
    expect(messengerAnchor.getAttribute('href')).toBe('/messenger');
  });

  it('should show profile image', () => {
    const { getByAltText } = getWrapper({ profileImg: 'profile.png' });

    const image = getByAltText('Profile') as HTMLImageElement;

    expect(image.src).toBe('http://localhost/profile.png');
  });
});
