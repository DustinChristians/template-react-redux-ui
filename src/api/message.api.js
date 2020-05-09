import { handleResponse, handleError } from './api.utils';

const baseUrl = `${process.env.REACT_APP_API_URL}/messages/`;

export function getMessages() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMessage(message) {
  return fetch(baseUrl + (message.id || ''), {
    method: message.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(message),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMessage(messageId) {
  return fetch(baseUrl + messageId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
