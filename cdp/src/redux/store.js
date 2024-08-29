import { configureStore } from '@reduxjs/toolkit';
import energyReducer from '../redux/slices/energyslice';
import cdpReducer from './slices/cdpslice'

const store = configureStore({
  reducer: {
    energy: energyReducer,
    cdp:cdpReducer,
  },
});

export default store;
