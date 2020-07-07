import { ChannelActions, ChannelState, ChannelActionTypes } from './types';

const initialState: ChannelState = {
  data: null,
};

function channelsReducer(state: ChannelState = initialState, action: ChannelActions): ChannelState {
  switch (action.type) {
    case ChannelActionTypes.SET_CHANNEL_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export { channelsReducer };
