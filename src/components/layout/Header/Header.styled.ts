import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  grid-area: header;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0;
  padding: 0 ${({ theme }) => theme.app.padding};
`;

const MenuStyled = styled.nav`
  flex: 1;

  ul {
    display: flex;
    list-style: none;
  }
`;

const MenuItemStyled = styled.a<{ isActive: boolean }>`
  text-decoration: none;

  .text {
    color: ${({ theme: { colors }, isActive }) => (isActive ? colors.primary : colors.black)};
    font-size: 0.875em;
    padding: 23px;
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
