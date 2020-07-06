import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./styles";
import { Header } from "./components";
import { AppWrapperStyled, MainStyled } from "./App.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapperStyled>
        <Header />
        <MainStyled>Main</MainStyled>
      </AppWrapperStyled>
    </ThemeProvider>
  );
}

export { App };
