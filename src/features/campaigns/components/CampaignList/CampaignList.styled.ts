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
`;

export { ListStyled };
