import styled from "styled-components";

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 3.75rem auto;
  grid-template-columns: 9.375rem auto 9.375rem;
  grid-template-areas:
    ". header ."
    ". main .";
  width: 100%;
  height: 100%;
`;

const MainStyled = styled.main`
  grid-area: main;
`;

export { AppStyled, MainStyled };
