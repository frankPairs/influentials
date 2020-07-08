import React from 'react';

import { Logo } from '../../icons';
import { HeaderStyled, AvatarStyled, MenuStyled, MenuItemStyled } from './Header.styled';

interface Props {
  profileImg: string;
}

const menu = [
  { text: 'Dashboard', path: '/dashboard' },
  { text: 'Marketplace', path: '/marketplace' },
  { text: 'Campaigns', path: '/campaigns' },
  { text: 'Messenger', path: '/messenger' },
];

function Header({ profileImg }: Props) {
  return (
    <HeaderStyled>
      <div>
        <Logo />
      </div>
      <MenuStyled>
        <ul>
          {menu.map((item) => (
            <MenuItemStyled key={item.path} to={item.path} exact activeClassName="active">
              <li>
                <span className="text">{item.text}</span>
              </li>
            </MenuItemStyled>
          ))}
        </ul>
      </MenuStyled>
      <AvatarStyled>
        <img alt="Profile" src={profileImg} />
      </AvatarStyled>
    </HeaderStyled>
  );
}

export { Header };
