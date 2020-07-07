import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middlewares } from './middlewares';
import { campaignsReducer } from './campaigns';
import { brandsReducer } from './brands';
import { channelsReducer } from './channels';

const appReducers = combineReducers({
  campaigns: campaignsReducer,
  brands: brandsReducer,
  channels: channelsReducer,
});
const appStore = createStore(appReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export { appStore };
