const apiUrl = `${process.env.REACT_APP_API_URL}/`;

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error(`API call failed. ${error}`);
  throw error;
}

export function apiGet(path) {
  return fetch(`${apiUrl}${path}`).then(handleResponse).catch(handleError);
}

export function apiPutOrPost(path, item) {
  return fetch(`${apiUrl}${path}${item.id || ''}`, {
    method: item.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function apiDelete(path, itemId) {
  return fetch(`${apiUrl}${path}${itemId}`, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
