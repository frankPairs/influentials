import React from 'react';

import { GoogleAnalyticsChannel } from '../GoogleAnalyticsChannel/GoogleAnalyticsChannel';
import { InstagramChannel } from '../InstagramChannel/InstagramChannel';

interface Props {
  name: string;
  slug: string;
  reach: string;
  className?: string;
}

function Channel(props: Props) {
  switch (props.slug) {
    case 'instagram': {
      return <InstagramChannel {...props} />;
    }
    case 'google-analytics': {
      return <GoogleAnalyticsChannel {...props} />;
    }
    default: {
      return null;
    }
  }
}

export { Channel };
