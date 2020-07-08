import React from 'react';

import instagranLogo from '../../../assets/images/instagram-logo.png';
import { formatCompact } from '../../../utils/numbers';
import { ChannelStyled } from '../Channel/Channel.styled';

interface Props {
  name: string;
  reach: string;
  className?: string;
}

function InstagramChannel({ name, reach, className = '' }: Props) {
  const [from, to] = reach.split('_');

  return (
    <ChannelStyled className={className}>
      <img className="logo-img" src={instagranLogo} alt={name} />
      <span className="text">{`${formatCompact(Number(from))}-${formatCompact(Number(to))} followers`}</span>
    </ChannelStyled>
  );
}

export { InstagramChannel };
