import { combineReducers } from 'redux';
import messages from './message.reducer';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
