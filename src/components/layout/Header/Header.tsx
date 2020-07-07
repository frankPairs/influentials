import React from 'react';

import { Logo } from '../../icons';
import { HeaderStyled, AvatarStyled, MenuStyled, MenuItemStyled } from './Header.styled';

interface Props {
  profileImg: string;
}

const menu = [
  { text: 'Dashboard', path: '/', isActive: false },
  { text: 'Marketplace', path: '/marketplace', isActive: true },
  { text: 'Campaigns', path: '/campaigns', isActive: false },
  { text: 'Messenger', path: '/messenger', isActive: false },
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
            <MenuItemStyled key={item.path} href={item.path} isActive={item.isActive}>
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
