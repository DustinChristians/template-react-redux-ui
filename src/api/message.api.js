import { apiGet, apiPutOrPost, apiDelete } from './api.utils';

const path = `messages/`;

export function getMessages() {
  return apiGet(path);
}

export function saveMessage(message) {
  return apiPutOrPost(path, message);
}

export function deleteMessage(messageId) {
  return apiDelete(path, messageId);
}
