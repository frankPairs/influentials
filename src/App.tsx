import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './styles';
import { Header } from './components/layout';
import { AppStyled, MainStyled } from './App.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <MainStyled>Main</MainStyled>
      </AppStyled>
    </ThemeProvider>
  );
}

export { App };
