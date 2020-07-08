import styled from 'styled-components';

const ListStyled = styled.ul`
  display: grid;
  list-style: none;
  grid-column-gap: 1.8125rem;
  grid-row-gap: 1.8125rem;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: ${({ theme }) => theme.media.desktopSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  }
`;

export { ListStyled };
