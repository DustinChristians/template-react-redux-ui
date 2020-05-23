import { combineReducers } from 'redux';
import messages from './message.reducer';
import apiCallsInProgress from './api-status.reducer';

const rootReducer = combineReducers({
  messages,
  apiCallsInProgress,
});

export default rootReducer;
