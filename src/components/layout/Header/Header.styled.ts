import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  grid-area: header;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0;
  padding: 0 10%;

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 1.5rem;
  }
`;

const MenuStyled = styled.nav`
  flex: 1;

  ul {
    display: flex;
    list-style: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    ul {
      display: none;
    }
  }
`;

const MenuItemStyled = styled(NavLink)`
  text-decoration: none;

  .text {
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 0.875em;
    padding: 23px;
  }

  &.active {
    .text {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
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

export { HeaderStyled, AvatarStyled, MenuStyled, MenuItemStyled };
