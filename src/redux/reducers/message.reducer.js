import * as types from '../actions/action-types.constants';
import initialState from './initialState';

export default function messageReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.CREATE_MESSAGE_SUCCESS:
      return [...state, { ...action.message }];
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;
    case types.UPDATE_MESSAGE_SUCCESS:
      return state.map((message) => (message.id === action.message.id ? action.message : message));
    case types.DELETE_MESSAGE_SUCCESS:
      return state.filter((message) => message.id !== action.message.id);
    default:
      return state;
  }
}
