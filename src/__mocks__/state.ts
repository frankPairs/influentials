import { AppState } from '../store/types';

function getMockAppState(overrideState?: Partial<AppState>) {
  return {
    brands: {
      data: null,
    },
    campaigns: { data: null, loading: false, error: null },
    channels: { data: null },
    ...overrideState,
  };
}

export { getMockAppState };
