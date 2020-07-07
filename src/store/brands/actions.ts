import { SetBrandDataAction, Brand, BrandActionTypes } from './types';

const setBrandData = (brands: { [brandId: number]: Brand }): SetBrandDataAction => ({
  type: BrandActionTypes.SET_BRAND_DATA,
  payload: brands,
});

export { setBrandData };
