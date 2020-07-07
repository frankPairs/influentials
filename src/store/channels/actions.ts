import { SetChannelDataAction, ChannelCampaign, ChannelActionTypes } from './types';

const setChannelData = (channels: { [channelId: number]: ChannelCampaign }): SetChannelDataAction => ({
  type: ChannelActionTypes.SET_CHANNEL_DATA,
  payload: channels,
});

export { setChannelData };
