import { mockChannelsMap } from '../../__mocks__';
import { setChannelData } from './actions';
import { ChannelActionTypes } from './types';

describe('channels actions', () => {
  it('should return the right action after calling setChannelData action', () => {
    const result = setChannelData(mockChannelsMap);

    expect(result).toEqual({
      type: ChannelActionTypes.SET_CHANNEL_DATA,
      payload: mockChannelsMap,
    });
  });
});
