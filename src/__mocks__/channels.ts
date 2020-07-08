import { ChannelCampaign } from '../store/channels';

const mockChannelsMap: { [channelId: number]: ChannelCampaign } = {
  1: {
    id: 1,
    reach: '1000',
    channel: {
      id: 5,
      name: 'channel 1',
      slug: 'channel-1',
    },
  },
  2: {
    id: 2,
    reach: '2000',
    channel: {
      id: 6,
      name: 'channel 6',
      slug: 'channel-6',
    },
  },
  3: {
    id: 3,
    reach: '1000',
    channel: {
      id: 7,
      name: 'channel 7',
      slug: 'channel-7',
    },
  },
  4: {
    id: 4,
    reach: '500',
    channel: {
      id: 8,
      name: 'channel 8',
      slug: 'channel-8',
    },
  },
};

export { mockChannelsMap };
