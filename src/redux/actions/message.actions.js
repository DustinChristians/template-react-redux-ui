import * as types from './action-types.constants';
import * as messageApi from '../../api/message.api';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function loadMessages() {
  return function thunk(dispatch) {
    return messageApi
      .getMessages()
      .then((messages) => {
        dispatch(loadMessagesSuccess(messages));
      })
      .catch((error) => {
        throw error;
      });
  };
}
