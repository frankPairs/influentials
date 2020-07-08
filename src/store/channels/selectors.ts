import { AppState } from '../types';

const selectChannelData = (state: AppState) => state.channels.data;

const selectChannelsById = (state: AppState, channelIds: number[]) => {
  const channels = selectChannelData(state);

  if (!channels) {
    return [];
  }

  return channelIds.map((channelId) => channels[channelId]);
};

export { selectChannelData, selectChannelsById };
