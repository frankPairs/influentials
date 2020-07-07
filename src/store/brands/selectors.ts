import { AppState } from '../types';

const selectBrandData = (state: AppState) => state.brands.data;

export { selectBrandData };
