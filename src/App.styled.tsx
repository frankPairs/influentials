import styled from 'styled-components';

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 3.75rem auto;
  grid-template-columns: auto;
  grid-template-areas:
    'header'
    'main';
  width: 100%;
  height: 100%;
`;

const MainStyled = styled.main`
  grid-area: main;
  padding: 2.75rem ${({ theme }) => theme.app.padding};
`;

export { AppStyled, MainStyled };
