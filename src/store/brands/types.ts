/* State */
interface BrandState {
  data: { [brandId: number]: Brand } | null;
}

/* Actions */
enum BrandActionTypes {
  SET_BRAND_DATA = 'setBrandData',
}

interface SetBrandDataAction {
  type: BrandActionTypes.SET_BRAND_DATA;
  payload: { [brandId: number]: Brand };
}

type BrandActions = SetBrandDataAction;

/* Models */
interface Brand {
  id: number;
  name: string;
  image: string;
}

export { Brand, BrandState, BrandActionTypes, SetBrandDataAction, BrandActions };
