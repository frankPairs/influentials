import React from 'react';

import profileImg from '../../../assets/images/profile.png';
import { Logo } from '../../icons';
import { HeaderStyled, AvatarStyled } from './Header.styled';

function Header() {
  return (
    <HeaderStyled>
      <div>
        <Logo />
      </div>
      <div>Menu</div>
      <AvatarStyled>
        <img alt="Profile" src={profileImg} />
      </AvatarStyled>
    </HeaderStyled>
  );
}

export { Header };
