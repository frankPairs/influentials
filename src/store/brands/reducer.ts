import { BrandActions, BrandState, BrandActionTypes } from './types';

const initialState: BrandState = {
  data: null,
};

function brandsReducer(state: BrandState = initialState, action: BrandActions): BrandState {
  switch (action.type) {
    case BrandActionTypes.SET_BRAND_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export { brandsReducer };
