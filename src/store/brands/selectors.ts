import { pathOr } from 'ramda';

import { AppState } from '../types';
import { Brand } from './types';

const selectBrandData = (state: AppState) => state.brands.data;

const selectBrandById = (state: AppState, brandId: number) =>
  pathOr<Brand | null>(null, ['brands', 'data', brandId], state);

export { selectBrandData, selectBrandById };
