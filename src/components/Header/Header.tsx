import React from "react";

import { HeaderWrapperStyled } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapperStyled>
      <div>Icon</div>
      <div>Menu</div>
      <div>Profile</div>
    </HeaderWrapperStyled>
  );
}

export { Header };
