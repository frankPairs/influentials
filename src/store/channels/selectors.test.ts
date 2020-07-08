import { mockChannelsMap, getMockAppState } from '../../__mocks__';
import { selectChannelData, selectChannelsById } from './selectors';

const mockState = getMockAppState({
  channels: { data: mockChannelsMap },
});

describe('channels selectors', () => {
  it('should return channels data after calling selectChannelData selector', () => {
    const result = selectChannelData(mockState);

    expect(result).toEqual(mockChannelsMap);
  });

  it('should return an array of channels after calling selectChannelsById selector when channels exists', () => {
    const result = selectChannelsById(mockState, [1, 3]);

    expect(result).toEqual([mockChannelsMap[1], mockChannelsMap[3]]);
  });

  it('should return an empty array after calling selectChannelsById selector when channels does not exists', () => {
    const result = selectChannelsById(mockState, [5, 10]);

    expect(result).toEqual([]);
  });
});
