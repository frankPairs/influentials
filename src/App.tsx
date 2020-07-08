import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import profileImg from './assets/images/profile.png';
import { theme, GlobalStyle } from './styles';
import { Header } from './components/layout';
import { StoreProvider } from './store';
import { AppStyled, MainStyled } from './App.styled';

const CampaignsRouter = lazy(() => import('./features/campaigns/router'));
const MarketplaceRouter = lazy(() => import('./features/marketplace/router'));
const DashboardRouter = lazy(() => import('./features/dashboard/router'));
const MessengerRouter = lazy(() => import('./features/messenger/router'));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <GlobalStyle />
          <AppStyled>
            <Header profileImg={profileImg} />
            <MainStyled>
              <Suspense fallback={null}>
                <Switch>
                  <Route path="/dashboard" component={DashboardRouter} exact />
                  <Route path="/campaigns" component={CampaignsRouter} exact />
                  <Route path="/marketplace" component={MarketplaceRouter} exact />
                  <Route path="/messenger" component={MessengerRouter} exact />

                  <Redirect to="/campaigns" />
                </Switch>
              </Suspense>
            </MainStyled>
          </AppStyled>
        </StoreProvider>
      </ThemeProvider>
    </Router>
  );
}

export { App };
