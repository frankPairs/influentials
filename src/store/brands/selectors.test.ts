import { mockBrandsMap, getMockAppState } from '../../__mocks__';
import { selectBrandData, selectBrandById } from './selectors';

const mockState = getMockAppState({
  brands: { data: mockBrandsMap },
});

describe('brands selectors', () => {
  it('should return brands data after calling selectBrandData selector', () => {
    const result = selectBrandData(mockState);

    expect(result).toEqual(mockBrandsMap);
  });

  it('should return a brand after calling selectBrandById selector when brand exists', () => {
    const result = selectBrandById(mockState, 1);

    expect(result).toEqual(mockBrandsMap[1]);
  });

  it('should return a null after calling selectBrandById selector when brand does not exists', () => {
    const result = selectBrandById(mockState, 5);

    expect(result).toEqual(null);
  });
});
