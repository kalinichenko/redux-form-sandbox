import fetchPonyfill from 'fetch-ponyfill';
import Promise from 'es6-promise';

const { fetch } = fetchPonyfill(Promise);

export const required = value => (value ? undefined : 'Required');
export const latinOnly = value => (/^[a-zA-Z]+$/.test(value) ? undefined : 'Latin letters only');
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const asyncValidate = ({iban}) => {
  return fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({iban})
  })
  .then(parseJSON)
  .then(function(response) {
    const {ok, body} = response;
    if (!ok) {
      return Promise.reject({_error: body.message});
    } else if (!body.valid) {
      return Promise.reject({iban: 'invalid IBAN'});
    }
  })
}

function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((body) => resolve({
      ok: response.ok,
      body,
    })));
}
