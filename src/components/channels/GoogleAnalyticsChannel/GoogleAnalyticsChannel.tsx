import React from 'react';

import googleLogo from '../../../assets/images/google-logo.png';
import { formatCompact } from '../../../utils/numbers';
import { ChannelStyled } from '../Channel/Channel.styled';

interface Props {
  name: string;
  reach: string;
  className?: string;
}

function GoogleAnalyticsChannel({ name, reach, className = '' }: Props) {
  const [from, to] = reach.split('_');

  return (
    <ChannelStyled className={className}>
      <img className="logo-img" src={googleLogo} alt={name} />
      <span className="text">{`${formatCompact(Number(from))}-${formatCompact(Number(to))} likes`}</span>
    </ChannelStyled>
  );
}

export { GoogleAnalyticsChannel };
