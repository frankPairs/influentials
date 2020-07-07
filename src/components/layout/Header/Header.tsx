import React from "react";

import { Logo } from "../../icons";
import { HeaderStyled, AvatarStyled } from "./Header.styled";
// @ts-ignore
import profileImg from "../../../assets/images/profile.png";

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
