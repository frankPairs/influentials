/* State */
interface ChannelState {
  data: { [channelId: number]: ChannelCampaign } | null;
}

/* Actions */
enum ChannelActionTypes {
  SET_CHANNEL_DATA = 'setChannelData',
}

interface SetChannelDataAction {
  type: ChannelActionTypes.SET_CHANNEL_DATA;
  payload: { [ChannelId: number]: ChannelCampaign };
}

type ChannelActions = SetChannelDataAction;

/* Models */
interface Channel {
  id: number;
  name: string;
  slug: string;
}

interface ChannelCampaign {
  id: number;
  reach: string;
  channel: Channel;
}

export { Channel, ChannelCampaign, ChannelState, ChannelActionTypes, ChannelActions, SetChannelDataAction };
