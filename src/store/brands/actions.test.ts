import { mockBrandsMap } from '../../__mocks__';
import { setBrandData } from './actions';
import { BrandActionTypes } from './types';

describe('brands actions', () => {
  it('should return the right action after calling setBrandData action', () => {
    const result = setBrandData(mockBrandsMap);

    expect(result).toEqual({
      type: BrandActionTypes.SET_BRAND_DATA,
      payload: mockBrandsMap,
    });
  });
});
