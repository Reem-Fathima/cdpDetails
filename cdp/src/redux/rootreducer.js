import { combineReducers } from 'redux';
import energyReducer from './energyReducer';

const rootReducer = combineReducers({
  energy: energyReducer,
  // Add other reducers here
});

export default rootReducer;
