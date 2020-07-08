import { mockChannelsMap } from '../../__mocks__';
import { ChannelState, ChannelActions } from './types';
import { channelsReducer, channelsInitialState } from './reducer';
import { setChannelData } from './actions';

function getState(overrideState: Partial<ChannelState> | null, action: ChannelActions) {
  return channelsReducer(
    {
      ...channelsInitialState,
      ...overrideState,
    },
    action,
  );
}
describe('channels reducer', () => {
  it('should set data after triggering setBrandData action', () => {
    const action = setChannelData(mockChannelsMap);
    const state = getState(null, action);

    expect(state.data).toEqual(mockChannelsMap);
  });
});
