import { AppState } from '../types';
import { ChannelCampaign } from './types';

const selectChannelData = (state: AppState) => state.channels.data;

const selectChannelsById = (state: AppState, channelIds: number[]) => {
  const channels = selectChannelData(state);

  if (!channels) {
    return [];
  }

  return channelIds.reduce((acc: ChannelCampaign[], channelId: number) => {
    const channel = channels[channelId];
    return !channel ? acc : [...acc, channel];
  }, []);
};

export { selectChannelData, selectChannelsById };
