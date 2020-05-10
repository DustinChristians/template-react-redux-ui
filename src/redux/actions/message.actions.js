import * as types from './action-types.constants';
import * as messageApi from '../../api/message.api';
import { beginApiCall, apiCallError } from './api-status.actions';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function createMessageSuccess(message) {
  return { type: types.CREATE_MESSAGE_SUCCESS, message };
}

export function updateMessageSuccess(message) {
  return { type: types.UPDATE_MESSAGE_SUCCESS, message };
}

export function deleteMessageSuccess(message) {
  return { type: types.DELETE_MESSAGE_SUCCESS, message };
}

export function loadMessages() {
  return function thunk(dispatch) {
    dispatch(beginApiCall());
    return messageApi
      .getMessages()
      .then((messages) => {
        dispatch(loadMessagesSuccess(messages));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveMessage(message) {
  return function thunk(dispatch) {
    dispatch(beginApiCall());
    return messageApi
      .saveMessage(message)
      .then((savedMessage) => {
        if (message.id) {
          dispatch(updateMessageSuccess(savedMessage));
        } else {
          dispatch(createMessageSuccess(savedMessage));
        }
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteMessage(message) {
  return function thunk(dispatch) {
    dispatch(deleteMessageSuccess(message));
    return messageApi.deleteMessage(message.id);
  };
}
