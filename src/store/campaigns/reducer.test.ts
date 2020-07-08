import { mockCampaingsNormalized } from '../../__mocks__';
import { CampaignState, CampaignActions } from './types';
import { campaignsReducer, campaignsInitialState } from './reducer';
import { setCampaignData, setCampaignLoading, setCampaignError } from './actions';

function getState(overrideState: Partial<CampaignState> | null, action: CampaignActions) {
  return campaignsReducer(
    {
      ...campaignsInitialState,
      ...overrideState,
    },
    action,
  );
}
describe('campaigns reducer', () => {
  it('should set data after triggering setCampaignData action', () => {
    const action = setCampaignData(mockCampaingsNormalized);
    const state = getState(null, action);

    expect(state.data).toEqual(mockCampaingsNormalized);
    expect(state.loading).toEqual(false);
    expect(state.error).toEqual(null);
  });

  it('should set loading after triggering setCampaignLoading action', () => {
    const action = setCampaignLoading();
    const state = getState(null, action);

    expect(state.loading).toEqual(true);
  });

  it('should set error after triggering setCampaignError action', () => {
    const action = setCampaignError('error');
    const state = getState(null, action);

    expect(state.error).toEqual('error');
  });
});
