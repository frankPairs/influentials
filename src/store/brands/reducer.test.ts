import { mockBrandsMap } from '../../__mocks__';
import { BrandState, BrandActions } from './types';
import { brandsReducer, brandsInitialState } from './reducer';
import { setBrandData } from './actions';

function getState(overrideState: Partial<BrandState> | null, action: BrandActions) {
  return brandsReducer(
    {
      ...brandsInitialState,
      ...overrideState,
    },
    action,
  );
}
describe('brands reducer', () => {
  it('should return new data after triggering setBrandData action', () => {
    const action = setBrandData(mockBrandsMap);
    const state = getState(null, action);

    expect(state.data).toEqual(mockBrandsMap);
  });
});
