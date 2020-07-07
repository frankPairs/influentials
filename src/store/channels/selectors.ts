import { AppState } from '../types';

const selectChannelData = (state: AppState) => state.channels.data;

export { selectChannelData };
