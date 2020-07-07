import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  grid-area: header;
`;

const AvatarStyled = styled.div`
  height: 2.125rem;
  width: 2.125rem;

  img {
    border-radius: 50%;
    height: auto;
    width: 100%;
  }
`;

export { HeaderStyled, AvatarStyled };
