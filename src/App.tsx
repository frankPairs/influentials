import React from 'react';
import { ThemeProvider } from 'styled-components';

import profileImg from './assets/images/profile.png';
import { theme, GlobalStyle } from './styles';
import { Header } from './components/layout';
import { StoreProvider } from './store';
import { AppStyled, MainStyled } from './App.styled';
import { CampaignsView } from './features/campaigns';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <AppStyled>
          <Header profileImg={profileImg} />

          <MainStyled>
            <CampaignsView />
          </MainStyled>
        </AppStyled>
      </StoreProvider>
    </ThemeProvider>
  );
}

export { App };
